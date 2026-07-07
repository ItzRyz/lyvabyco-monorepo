import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { toNodeHandler } from "better-auth/node";
import { auth } from "./lib/auth.js";
// import productRoutes from "./routes/product.routes.js";

const app = express();
const PORT = process.env.PORT;

// Standard Middlewares
app.use(cors({
    origin: process.env.NEXT_PUBLIC_APP_URL,
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

// Base Route
app.get("/", (req, res) => {
    res.json({ message: "E-commerce API is live 🚀" });
});

app.all("/api/auth/*", (req, res) => {
    return toNodeHandler(auth)(req, res);
});

app.listen(PORT, () => {
    console.log(`[server]: API backend is running at http://localhost:${PORT}`);
});