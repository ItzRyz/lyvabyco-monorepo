"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var client_1 = require("../generated/prisma/client");
var adapter_pg_1 = require("@prisma/adapter-pg");
var extension_accelerate_1 = require("@prisma/extension-accelerate");
var adapter = new adapter_pg_1.PrismaPg({
    connectionString: process.env.DATABASE_URL,
});
// Letakkan let/const ekstensi Anda di sini jika ada, atau gunakan typeof langsung
var baseClient = new client_1.PrismaClient({ adapter: adapter });
var extendedClient = baseClient.$extends((0, extension_accelerate_1.withAccelerate)());
var globalForPrisma = globalThis;
// Gunakan tipe ExtendedPrismaClient, JANGAN gunakan ': PrismaClient'
exports.prisma = globalForPrisma.prisma ||
    new client_1.PrismaClient({
        adapter: adapter
    }).$extends((0, extension_accelerate_1.withAccelerate)());
if (process.env.NODE_ENV !== "production")
    globalForPrisma.prisma = exports.prisma;
