import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'JokeRace Docs',
  description: 'The What, Where, How, and Why of everything JokeRace',
  iconUrl: '/favicon.png',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Technical How-Tos',
      collapsed: false,
      items: [
        {
          text: 'Verifying Contracts',
          link: '/verifying-contracts',
        },
      ]
    },
  ],
})
