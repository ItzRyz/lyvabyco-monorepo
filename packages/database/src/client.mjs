import { PrismaClient as GeneratedPrismaClient } from '../generated/prisma/client.ts';
import { PrismaPg } from '@prisma/adapter-pg';
import { withAccelerate } from '@prisma/extension-accelerate';

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const baseClient = new GeneratedPrismaClient({ adapter });
const extendedClient = baseClient.$extends(withAccelerate());

const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new GeneratedPrismaClient({ adapter }).$extends(withAccelerate());

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

export default prisma;
