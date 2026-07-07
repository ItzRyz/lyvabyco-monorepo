import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";

export function createApp() {
  const app = express();

  app.use(
    cors({
      origin: process.env.NEXT_PUBLIC_APP_URL,
      credentials: true,
    }),
  );
  app.use(express.json());
  app.use(cookieParser());

  app.get("/", (_req, res) => {
    res.json({ message: "E-commerce API is live 🚀" });
  });

  app.all("/api/auth/*", (req, res) => {
    return toNodeHandler(auth)(req, res);
  });

  return app;
}

export const app = createApp();
