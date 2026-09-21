# Go2Abroad Deployment on GoDaddy

This guide deploys the monorepo with:

- Public Vite/React website
- Next.js admin dashboard on port `3001`
- Next.js student portal on port `3002`
- NestJS API on port `4000`
- MySQL through Prisma

## Recommended hosting

Use a GoDaddy Linux VPS with SSH and sudo access. The API, admin, and student
applications are long-running Node.js services.

GoDaddy VPS admin access:
https://www.godaddy.com/en-uk/help/enable-root-or-admin-access-to-my-vps-hosting-24737

Shared cPanel hosting is only suitable if the plan supports SSH and Node.js
application processes. GoDaddy's cPanel MySQL setup is documented here:
https://www.godaddy.com/en-uk/help/create-a-mysql-database-in-my-web-hosting-cpanel-16016

## If you are using shared cPanel hosting

Your prompt (`p3plzcpnl...`) indicates shared cPanel hosting. Do not run
`sudo`, `apt`, Nginx, or system-wide PM2 commands there. They are VPS
commands and are not available on shared hosting.

Use cPanel instead:

1. Open **cPanel → Software → Setup Node.js App**. If this menu is missing,
   the current hosting plan cannot run this Node.js application; use GoDaddy
   Node.js Hosting or a VPS.
2. Select Node.js 20 or newer and create one application for the API.
3. Create separate Node.js applications for the admin and student Next.js
   applications if the plan supports multiple applications.
4. Set environment variables in each Node.js application's cPanel settings.
5. Use cPanel's **MySQL Database Wizard** for the database and phpMyAdmin for
   inspection.

From the SSH prompt, first check what the plan provides:

```bash
cd ~
node --version
npm --version
git --version
```

If Node.js and npm are available, keep the repository outside `public_html`:

```bash
cd ~
git clone YOUR_REPOSITORY_URL go2abroad
cd go2abroad
npm install
npm run build:cms
npm --prefix apps/api install
npm --prefix apps/admin install
npm --prefix apps/student install
npm --prefix apps/frontend install
```

For the API Node.js application, use:

- Application root: `go2abroad/apps/api`
- Startup file: `dist/main.js`
- Application URL: `api.example.com`
- `DATABASE_URL`: the MySQL credentials created in cPanel
- `CORS_ORIGINS`: the final public, admin, and student HTTPS URLs

Before starting the API, run the schema and seed commands once from SSH:

```bash
cd ~/go2abroad/apps/api
npm run db:generate
npx prisma migrate deploy
npm run db:seed
npm run db:seed:cms
```

Build the frontend locally or on the server, then copy its static output to
`public_html`:

```bash
cd ~/go2abroad
npm run build:frontend
cp -R apps/frontend/dist/. ~/public_html/
```

The admin and student Next.js applications must be configured as Node.js apps
in cPanel; they cannot be deployed as ordinary static files. If cPanel does
not provide a Node.js application manager, this monorepo needs a VPS or
GoDaddy Node.js Hosting instead of shared cPanel hosting.

## 1. DNS

Create `A` records pointing to the VPS IP:

| Host | Application |
| --- | --- |
| `@` and `www` | Public website |
| `admin` | Admin dashboard |
| `api` | NestJS API |
| `student` | Student portal |

The examples below use `example.com`; replace it with your real domain.

## 2. Prepare the VPS

```bash
ssh root@YOUR_SERVER_IP
adduser go2abroad
usermod -aG sudo go2abroad
su - go2abroad

sudo apt update
sudo apt install -y git nginx build-essential mysql-client
```

Install Node.js 20 or newer, then PM2:

```bash
node --version
npm --version
sudo npm install --global pm2
```

## 3. Configure MySQL

Create a MySQL database through GoDaddy cPanel's MySQL Database Wizard or on
the VPS. Record the database host, database name, username, password, and port.

Production connection string:

```env
DATABASE_URL="mysql://DB_USER:DB_PASSWORD@DB_HOST:3306/DB_NAME"
```

URL-encode special characters in database credentials. For example, `@` in a
password becomes `%40`.

## 4. Upload the repository

```bash
sudo mkdir -p /var/www/go2abroad
sudo chown -R go2abroad:go2abroad /var/www/go2abroad
cd /var/www/go2abroad
git clone YOUR_REPOSITORY_URL .
npm install
npm --prefix apps/api install
npm --prefix apps/admin install
npm --prefix apps/frontend install
npm --prefix apps/student install
npm run build:cms
```

## 5. Configure environment variables

Create `apps/api/.env`:

```env
DATABASE_URL="mysql://DB_USER:DB_PASSWORD@DB_HOST:3306/DB_NAME"
PORT=4000
CORS_ORIGINS="https://example.com,https://www.example.com,https://admin.example.com,https://student.example.com"
JWT_SECRET="GENERATE_A_LONG_RANDOM_SECRET"
JWT_EXPIRES_IN="15m"
PASSWORD_RESET_EXPIRES_MINUTES=30
SEED_ADMIN_EMAIL="admin@example.com"
SEED_ADMIN_PASSWORD="USE_A_STRONG_PASSWORD"
SEED_COUNSELLOR_EMAIL="counsellor@example.com"
SEED_COUNSELLOR_PASSWORD="USE_A_STRONG_PASSWORD"
SEED_STUDENT_EMAIL="student@example.com"
SEED_STUDENT_PASSWORD="USE_A_STRONG_PASSWORD"
```

Generate a JWT secret:

```bash
openssl rand -base64 48
```

Create `apps/admin/.env.local`:

```env
NEXT_PUBLIC_API_URL=https://api.example.com
NEXT_PUBLIC_WEBSITE_URL=https://example.com
```

## 6. Apply migrations and seed data

The active migration is a MySQL baseline. PostgreSQL migrations are preserved
under `apps/api/prisma/migrations-postgresql-archive` and must not be applied.

```bash
cd /var/www/go2abroad/apps/api
npm run db:generate
npx prisma migrate deploy
npm run db:seed
npm run db:seed:cms
npx prisma migrate status
```

## 7. Build the applications

```bash
cd /var/www/go2abroad
npm run build:frontend
npm run build:admin
npm run build:student
npm run build:api
```

The public website is generated in `apps/frontend/dist`.

## 8. Run Node services with PM2

```bash
cd /var/www/go2abroad
pm2 start apps/api/dist/main.js --name go2abroad-api
pm2 start npm --name go2abroad-admin --prefix apps/admin -- start
pm2 start npm --name go2abroad-student --prefix apps/student -- start
pm2 save
pm2 startup
```

Run the command printed by `pm2 startup` as root. Check services with:

```bash
pm2 status
pm2 logs go2abroad-api
```

## 9. Configure Nginx

Create `/etc/nginx/sites-available/go2abroad`:

```nginx
server {
    listen 80;
    server_name example.com www.example.com;
    root /var/www/go2abroad/apps/frontend/dist;

    location / {
        try_files $uri $uri/ /index.html;
    }
}

server {
    listen 80;
    server_name api.example.com;

    location / {
        proxy_pass http://127.0.0.1:4000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name admin.example.com;

    location / {
        proxy_pass http://127.0.0.1:3001;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

server {
    listen 80;
    server_name student.example.com;

    location / {
        proxy_pass http://127.0.0.1:3002;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
```

Enable and validate it:

```bash
sudo ln -s /etc/nginx/sites-available/go2abroad /etc/nginx/sites-enabled/go2abroad
sudo nginx -t
sudo systemctl reload nginx
```

## 10. Enable HTTPS

After DNS resolves, use Certbot:

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx \
  -d example.com \
  -d www.example.com \
  -d admin.example.com \
  -d api.example.com \
  -d student.example.com
```

GoDaddy SSL installation reference:
https://www.godaddy.com/en-ca/help/manually-install-an-ssl-certificate-on-my-web-hosting-cpanel-plan-or-vps-hosting-12027

## 11. Verify

```bash
curl https://api.example.com/health
```

Expected response:

```json
{"status":"ok","database":"connected"}
```

Check:

- `https://example.com`
- `https://admin.example.com`
- `https://student.example.com`
- `https://api.example.com/docs`

## 12. Deploy updates

```bash
cd /var/www/go2abroad
git pull
npm install
npm run build:cms
npm run db:generate --prefix apps/api
npx prisma migrate deploy --schema apps/api/prisma/schema.prisma
npm run build:frontend
npm run build:admin
npm run build:student
npm run build:api
pm2 restart go2abroad-api go2abroad-admin go2abroad-student
```

## Production rules

- Never commit `.env` or `.env.local`.
- Use strong, unique database, JWT, and seed-account passwords.
- Change or disable seed accounts after the first production login.
- Keep ports `3001`, `3002`, and `4000` private; expose only `80` and `443`.
- Back up MySQL and `apps/api/uploads`.
- Do not run development servers in production.
