import { Log, LogLevel, Miniflare } from "miniflare";

export async function setupPlatform() {
  const root = ".wrangler/state/v3"; // was '.mf' but match wrangler
  const mf = new Miniflare({
    log: new Log(LogLevel.WARN),
    modules: true,
    script: "",
    d1Databases: {
      DB: "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx",
    },
    d1Persist: `${root}/d1`,
    compatibilityDate: "2024-01-29",
    liveReload: true,
  });

  let platform = {
    env: await mf.getBindings(),
    context: {},
    caches: {},
    cf: {},
  };

  try {
    // Mini-flare caches a cf.json, loaded from https://workers.cloudflare.com/cf.json
    const cfText = fs.readFileSync("node_modules/.mf/cf.json", "utf8");
    platform.cf = JSON.parse(cfText);
  } catch (_) {}

  return platform;
}
