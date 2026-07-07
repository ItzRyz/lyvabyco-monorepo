import { describe, expect, it } from "bun:test";
import { createApp } from "./app";

describe("API app", () => {
  it("serves the health endpoint", async () => {
    const app = createApp();
    const server = app.listen(0);

    const address = server.address();
    if (!address || typeof address === "string") {
      throw new Error("Server did not bind to a port");
    }

    const response = await fetch(`http://127.0.0.1:${address.port}/`);
    const body = await response.text();

    server.close();

    expect(response.status).toBe(200);
    expect(body).toContain("E-commerce API is live");
  });
});
