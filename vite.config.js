import { defineConfig } from "vite";

const allowedHosts = [
  "3000-iyvlp2e0ty9wj7hhwmyg9-b8c9cda5.sg2.manus.computer",
  "8328-iyvlp2e0ty9wj7hhwmyg9-b8c9cda5.sg2.manus.computer"
];

const base = process.env.GITHUB_PAGES === "true" ? "/qutoof-solutions/" : "/";

export default defineConfig({
  base,
  server: { host: "0.0.0.0", port: 3000, strictPort: true, allowedHosts },
  preview: { host: "0.0.0.0", port: 3000, strictPort: true, allowedHosts },
  build: { outDir: "dist", emptyOutDir: true, sourcemap: false }
});
