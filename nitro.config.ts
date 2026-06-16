import { defineNitroConfig } from "nitropack/config";

export default defineNitroConfig({
  presets: ["node-server"],
  output: {
    dir: ".output",
    serverDir: ".output/server"
  }
});