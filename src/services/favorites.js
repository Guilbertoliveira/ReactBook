import axios from 'axios';

const favoriteAPI = axios.create({
  baseURL: 'http://localhost:8000/favorites',
});

async function getFavorites() {
  const response = await favoriteAPI.get('/');
  return response.data;
}

async function insertFavorites(id) {
  return await favoriteAPI.post(`/${id}`);
}

async function deleteFavorites(id) {
  await favoriteAPI.delete(`/${id}`);
}

export { getFavorites, insertFavorites, deleteFavorites };
