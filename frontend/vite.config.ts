import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    port: 3000,
  },
  test: {
    include: ["./**/*.test.ts", "./**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./src/test/setup.ts"],
  },
});
