// @ts-check
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'
import devtoolsJson from 'vite-plugin-devtools-json'

// https://astro.build/config
export default defineConfig({
  site: 'https://blog.rogerogers.com',
  integrations: [mdx(), sitemap()],
  vite: {
    plugins: [tailwindcss(), devtoolsJson()],
  },
})
