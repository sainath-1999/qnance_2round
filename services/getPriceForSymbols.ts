import { api } from '.';

export const getPriceForSymbol = async (symbol: string) => {
  try {
    const response = await api.get(`/trades?symbol=${symbol}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
