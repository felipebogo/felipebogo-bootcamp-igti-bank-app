import axios from 'axios';

const api = axios.create({
  baseURL: "http://localhost:3001",
  //baseURL: "https://felipebogo-bootcamp-igti-bank.herokuapp.com",
});

export default api;
