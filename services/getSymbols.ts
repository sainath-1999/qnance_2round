import { api } from '.';

export const getSymbols = async () => {
  try {
    const response = await api.get('/exchangeInfo');
    return response.data;
  } catch (error) {
    console.error(error);
    return error;
  }
};
