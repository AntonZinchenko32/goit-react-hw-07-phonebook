import axios from 'axios';

axios.defaults.baseURL = 'https://6526f15a917d673fd76d3ea3.mockapi.io';

export const fetchAll = async () => {
  const { data } = await axios.get('/contacts');
  // console.log(data);
  return data;
};

export const addItem = async (name, number) => {
  const {data} = await axios.post('/contacts', {name, number});
  return data;
};

export const deleteItem = async contactId => {
  const {data} = await axios.delete(`/contacts/${contactId}`);
  return data;
};

