import axios from 'axios';

const clientAPI = axios.create({
  baseURL: 'http://localhost:8000/client',
});

async function insertLogin(email, senha) {
  return await clientAPI.post('/login', {
    email: email,
    senha: senha,
  });
}

export { insertLogin, clientAPI };
