global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));
import { rest } from "msw";
import { setupServer } from "msw/node";


const data = {
  'results': [
    {
      'name': 'Rick Sanchez',
      'status': 'Alive',
      'image': 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
    },
    {
      'name': 'Morty Smith',
      'status': 'Alive',
      'image': 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
    },
    {
      'name': 'Summer Smith',
      'status': 'Alive',
      'image': 'https://rickandmortyapi.com/api/character/avatar/3.jpeg'
    }
  ]
}

const server = setupServer(
  rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
    return res(ctx.json(data))
  }
  ),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());