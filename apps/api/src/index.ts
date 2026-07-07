import type { IncomingMessage, ServerResponse } from "http";
import { createApp } from "./app.js";

export function createServer() {
    return createApp();
}

export default function handler(req: IncomingMessage, res: ServerResponse) {
    const app = createServer();
    app(req as never, res as never);
}

if (process.env.NODE_ENV !== "production") {
    const app = createServer();
    const port = process.env.PORT || 3001;
    app.listen(port, () => {
        console.log(`[server]: API backend is running at http://localhost:${port}`);
    });
}
