import elysiaConfig from "./elysia.config";
import { cors } from "@elysiajs/cors";
import { staticPlugin } from "@elysiajs/static";
import { Elysia } from "elysia";

const app = () => new Elysia()
  .use(cors({
    origin: "*"
  })).use(staticPlugin({
    ...elysiaConfig.staticRouter,
    ignorePatterns: ["/node_modules", "/dist", "/public", "/vite.config.js", "/bun.lockb", "/.replit", "/replit.nix"]
  }))
  .get("/", Bun.file('package.json'));

export default {
  fetch: app().fetch,
  hostname: "0.0.0.0",
  port: 3000
}