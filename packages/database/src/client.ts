import { PrismaClient } from "../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";
import { withAccelerate } from '@prisma/extension-accelerate';

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

// Letakkan let/const ekstensi Anda di sini jika ada, atau gunakan typeof langsung
const baseClient = new PrismaClient({ adapter });
const extendedClient = baseClient.$extends(withAccelerate());

// Buat alias tipe ekstensinya
type ExtendedPrismaClient = typeof extendedClient;

const globalForPrisma = globalThis as unknown as { prisma: ExtendedPrismaClient };

// Gunakan tipe ExtendedPrismaClient, JANGAN gunakan ': PrismaClient'
export const prisma: ExtendedPrismaClient =
    globalForPrisma.prisma ||
    new PrismaClient({
        adapter
    }).$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;