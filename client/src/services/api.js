import axios from 'axios';

const api = axios.create({
  baseURL: `http://localhost:${process.env.REACT_APP_PORT}`,
  //baseURL: "https://felipebogo-bootcamp-igti-bank.herokuapp.com",
});

export default api;
