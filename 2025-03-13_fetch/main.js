import { Hono } from "hono";
import { serveStatic } from "hono/deno";


const app = new Hono();

// serve index.html
app.get("/", serveStatic({ path: "./static/index.html" }));
app.get("*", serveStatic({ root: "./static" }));
app.get("/data", (c) => {
    const myObject = {
      name: "Max",
      age: 2,
        address: {
            city: "New York",
            country: "USA",
        },
        yw: "Hello World!",
        date: new Date().toISOString(),
    };
    return c.json(myObject);
  });


Deno.serve(app.fetch);
