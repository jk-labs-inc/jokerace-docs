import { defineConfig } from 'vocs'

export default defineConfig({
  title: 'JokeRace Docs',
  description: 'The What, Where, How, and Why of everything JokeRace',
  iconUrl: '/favicon.png',
  sidebar: [
    {
      text: 'Getting Started',
      link: '/',
    },
    {
      text: 'Frequently Asked Questions',
      link: '/faq',
    },
    {
      text: 'Technical How-Tos',
      collapsed: false,
      items: [
        {
          text: 'Building an Extension',
          link: '/technical-how-tos/building-an-extension',
        },
        {
          text: 'Verifying Contracts',
          link: '/technical-how-tos/verifying-contracts',
        },
        {
          text: 'JokeRace Onchain Data',
          link: '/technical-how-tos/jokerace-onchain-data',
        },
        {
          text: 'Circuits',
          link: '/technical-how-tos/circuits',
        },
      ]
    },
  ],
})
