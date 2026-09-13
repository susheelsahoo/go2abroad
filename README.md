# Go2Abroad

Go2Abroad is organized as a monorepo containing three separate web applications,
one future backend API, and shared packages.

## Structure

```text
apps/frontend  Public website
apps/admin     Staff administration dashboard
apps/student   Student portal
apps/api       Shared backend API
packages/ui    Shared UI components
packages/types Shared TypeScript types
packages/validation Shared validation schemas
packages/utils Shared utilities
```

## Development

```bash
npm run dev:frontend
npm run dev:admin
npm run dev:student
```

Or run all web applications together:

```bash
npm run dev:all
```

The API is available under `apps/api` and powers the configuration-driven page
builder and website content workflow. Start it with:

```bash
npm run dev:api
```

### Frontend icons

The frontend uses the local `@fortawesome/fontawesome-free` package for menu,
navigation, social, and action icons. Keep the package installed when setting up
the project; its CSS also loads the required icon font files.
