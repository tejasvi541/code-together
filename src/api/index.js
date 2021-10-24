import axios from 'axios';
// const url = 'http://127.0.0.1:4001';

const url = 'https://code-together-webapp.herokuapp.com';

export const compileCode = (data) => axios.post(`${url}/compile`, data);