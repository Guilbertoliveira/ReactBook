import axios from 'axios'

const booksAPI = axios.create({ baseURL: "http://localhost:8000/book" })  //create base for api

async function getBooks() {
    const response = await booksAPI.get('/'); // Supondo que sua API esteja configurada corretamente
    return response.data;

}

export {
    getBooks
}