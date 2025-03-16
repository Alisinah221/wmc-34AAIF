import { Hono } from "hono";
import { serveStatic } from "hono/deno";

const app = new Hono();
const Animal = {Name:"NANA",
                Type:"Mammal",
                Color:"Black",
                Age:3};
// serve index.html
app.get("/", serveStatic({ path: "./static/index.html" }));
app.get("*", serveStatic({ root: "./static" }));
app.get("/api/data", (c) => {
    return c.json(Animal);
  });
Deno.serve(app.fetch);
