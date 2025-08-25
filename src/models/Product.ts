import prisma from '../lib/database';

export async function findToolById(id: number) {
  return prisma.tool.findUnique({
    where: { id },
  });
}

export async function createTool(data: {
  name: string;
  description: string;
  category?: string;
  websiteUrl?: string;
}) {
  return prisma.tool.create({
    data,
  });
}