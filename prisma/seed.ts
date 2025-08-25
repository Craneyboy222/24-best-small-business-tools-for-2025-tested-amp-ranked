import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
(async () => {
  try {
    await prisma.item.create({ data: { title: "Getting started with 24 Best Small Business Tools for 2025 – Tested &amp; Ranked", description: "Your first record in the system." } });
  } finally {
    await prisma.$disconnect();
  }
})();
