import "dotenv/config";
import * as bcrypt from "bcrypt";
import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

function required(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) throw new Error(`${name} is required`);
  return value;
}

async function main(): Promise<void> {
  const adminEmail = required("SEED_ADMIN_EMAIL", "admin@go2abroad.local").toLowerCase();
  const studentEmail = required("SEED_STUDENT_EMAIL", "student@go2abroad.local").toLowerCase();
  const adminPassword = required("SEED_ADMIN_PASSWORD");
  const studentPassword = required("SEED_STUDENT_PASSWORD");

  const admin = await prisma.user.upsert({
    where: { email: adminEmail },
    update: { name: "Go2Abroad Admin", role: UserRole.ADMIN, passwordHash: await bcrypt.hash(adminPassword, 12), status: "ACTIVE" },
    create: { email: adminEmail, name: "Go2Abroad Admin", role: UserRole.ADMIN, passwordHash: await bcrypt.hash(adminPassword, 12) },
  });

  const student = await prisma.user.upsert({
    where: { email: studentEmail },
    update: { name: "Demo Student", role: UserRole.STUDENT, passwordHash: await bcrypt.hash(studentPassword, 12), status: "ACTIVE" },
    create: { email: studentEmail, name: "Demo Student", role: UserRole.STUDENT, passwordHash: await bcrypt.hash(studentPassword, 12) },
  });

  await prisma.studentProfile.upsert({
    where: { userId: student.id },
    update: { nationality: "Indian", country: "United Kingdom", highestEducation: "Bachelor's degree" },
    create: { userId: student.id, nationality: "Indian", country: "United Kingdom", highestEducation: "Bachelor's degree" },
  });

  await prisma.websiteSetting.upsert({
    where: { key: "default" },
    update: {},
    create: {
      key: "default", siteName: "Go2Abroad", slogan: "Connecting Dreams",
      logoUrl: "/images/logo.svg", logoLightUrl: "/images/logo-white.svg", faviconUrl: "/favicon.png",
      footerTitle: "Your journey starts here", footerDescription: "Expert guidance for your global education journey.",
      copyrightText: "© 2026 Go2Abroad. All rights reserved.", seoTitle: "Go2Abroad | Study Abroad Consultancy",
      seoDescription: "Your trusted guide to studying abroad.", seoKeywords: "study abroad, international education, universities",
      contactEmail: "hello@go2abroad.com", contactPhone: "+91 00000 00000", whatsappNumber: "+910000000000",
      address: "India", officeHours: "Monday - Saturday, 9:00 AM - 6:00 PM",
      socialLinks: { facebook: "https://facebook.com", instagram: "https://instagram.com", linkedin: "https://linkedin.com", youtube: "https://youtube.com" },
    },
  });

  const homePage = await prisma.page.upsert({
    where: { slug: "home" }, update: {}, create: { title: "Home", slug: "home", metaTitle: "Go2Abroad | Study Abroad Consultancy", metaDescription: "Your trusted guide to studying abroad." },
  });
  if (await prisma.pageSection.count({ where: { pageId: homePage.id } }) === 0) {
    await prisma.pageSection.create({ data: { pageId: homePage.id, type: "hero", order: 0, data: { title: "Study abroad with confidence", description: "Expert guidance for your global education journey.", buttonText: "Start your journey", buttonUrl: "/contact" } } });
  }

  console.log(`Seeded admin: ${admin.email}`);
  console.log(`Seeded student: ${student.email}`);
}

main().catch((error: unknown) => {
  console.error(error);
  process.exitCode = 1;
}).finally(async () => prisma.$disconnect());
