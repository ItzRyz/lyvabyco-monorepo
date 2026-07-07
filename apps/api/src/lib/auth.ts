import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@repo/db";

const appUrl = process.env.NEXT_PUBLIC_APP_URL || process.env.BETTER_AUTH_URL || "http://localhost:3000";
const secret = process.env.BETTER_AUTH_SECRET || process.env.AUTH_SECRET || "dev-secret-change-me";

export const auth = betterAuth({
    secret,
    baseURL: appUrl,
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true
    },
    advanced: {
        cookiePrefix: process.env.COOKIE_PREFIX || "lyvabyco",
    },
    user: {
        additionalFields: {
            roleId: {
                type: "string",
                required: true,
            }
        }
    }
});