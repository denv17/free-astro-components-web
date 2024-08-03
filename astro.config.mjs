import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import astroExpressiveCode from 'astro-expressive-code'

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
  integrations: [
    tailwind(),
    astroExpressiveCode({
      themes: ['poimandres', 'light-plus'],
      styleOverrides: {
        borderRadius: '0.5rem',
        borderWidth: '0px',
      },
    }),
  ],
})
