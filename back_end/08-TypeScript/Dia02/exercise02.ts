import axios from 'axios';

async function fetchApi(endpoint: string) {
  const { data } = await axios.get(`http://localhost:3001/${endpoint}`);
  return data;
}

fetchApi('breads')