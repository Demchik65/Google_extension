const esbuild = require("esbuild");
require("dotenv").config();

const apiKey = process.env.API_KEY;
if (!apiKey) {
  console.error("API_KEY is missing in .env");
  process.exit(1);
}

esbuild.build({
  entryPoints: ["scripts/background.entry.js"],
  bundle: true,
  outfile: "scripts/background.js",
  minify: true,
  format: "iife",
  define: {
    "process.env.NODE_ENV": '"production"',
    "process.env.API_KEY": `"${apiKey}"`,
  },
}).catch(() => process.exit(1));