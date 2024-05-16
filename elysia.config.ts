export default {
  staticRouter: {
    assets: import.meta.dir,
    prefix: '/',
    noCache: true
  },
  cors: async <T>(config: T) => await import("@elysiajs/cors").then(mod => mod.cors(config as T)),
  static: async <T>(config: T) => await import("@elysiajs/static").then(mod => mod.staticPlugin(config as T)),
}