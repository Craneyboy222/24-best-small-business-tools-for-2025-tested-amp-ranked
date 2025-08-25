import prisma from '../lib/database';

export async function findUserById(id: number) {
  return prisma.user.findUnique({
    where: { id },
  });
}

export async function createUser(data: {
  username: string;
  passwordHash: string;
  email: string;
}) {
  return prisma.user.create({
    data,
  });
}