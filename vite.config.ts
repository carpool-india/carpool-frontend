import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5181,
  },
  // @rideshare/types and @rideshare/utils are local file: deps whose compiled output
  // is CommonJS; Rollup's commonjs plugin only transforms paths under node_modules by
  // default, so without this their named exports fail static analysis at build time.
  build: {
    commonjsOptions: {
      include: [/node_modules/, /shared[\\/](types|utils)/],
    },
  },
  optimizeDeps: {
    include: ["@rideshare/types", "@rideshare/utils"],
  },
});
