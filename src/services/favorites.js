import axios from 'axios'

const favoriteAPI = axios.create({ baseURL: 'http://localhost:8000/favorites' })

async function getFavorites() {
    const response = await favoriteAPI.get('/')
    return response.data
}

export {
    getFavorites
}