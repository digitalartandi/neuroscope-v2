import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base "./" erlaubt das Hosting in jedem Unterordner (z. B. ALL-INKL).
export default defineConfig({
  base: "./",
  plugins: [react()],
  build: { sourcemap: false, assetsInlineLimit: 0 },
  test: { environment: "node", include: ["tests/**/*.test.ts"] },
} as any);
