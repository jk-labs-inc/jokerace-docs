import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'JokeRace Docs',
  description: 'The What, Where, How, and Why of everything JokeRace',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/getting-started',
    },
    {
      text: 'Verifying Contracts',
      link: '/verifying-contracts',
    },
  ],
})
