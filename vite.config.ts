import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    presets: process.env.NITRO_PRESET ? [process.env.NITRO_PRESET] : ["node-server"],
    output: {
      dir: ".output",
      serverDir: ".output/server"
    },
    deploymentTarget: "node"
  }
});