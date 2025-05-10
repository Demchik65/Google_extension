const esbuild = require("esbuild");

esbuild.build({
  entryPoints: ["scripts/background.entry.js"],
  bundle: true,
  outfile: "scripts/background.js",
  minify: true,
  format: "iife",
  define: {
    "process.env.NODE_ENV": '"production"',
  },
}).catch(() => process.exit(1));
