import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@repo/db/src/client";

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "postgresql",
    }),
    emailAndPassword: {
        enabled: true
    },
    advanced: {
        cookiePrefix: process.env.COOKIE_PREFIX,
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