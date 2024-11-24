import { resolve } from 'path'
import { defineConfig } from 'vite'
import fs from "fs";

const pages = Object.fromEntries(
  fs.readdirSync("./pages").map((item) => [
    item,
    resolve(`${__dirname}/pages/${item}/index.html`),
  ])
);

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        ...pages
      },
    },
  },
})