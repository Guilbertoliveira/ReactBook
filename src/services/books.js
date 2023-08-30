import axios from 'axios';

const booksAPI = axios.create({ baseURL: 'http://localhost:8000/book' }); //create base for api, existing other paraments not mandatory

async function getBooks() {
  const response = await booksAPI.get('/'); // Assuming your API is configured correctly
  return response.data;
}

async function patchBooks(id, favoriteBoolean) {
  await booksAPI.patch(`/${id}`, {
    favorite: favoriteBoolean,
  });
}

export { getBooks, patchBooks, booksAPI };
