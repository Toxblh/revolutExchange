import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const normalAxios = axios.create();
const mockAxios = axios.create({
  baseURL: 'http://revolut.com'
});

const mock = new MockAdapter(mockAxios);

const reply = {
  EUR: '1500',
  GBP: '12.32',
  USD: '10',
};

mock.onGet('/cash').reply(200, reply);

export function getRates() {
  return normalAxios.get('https://api.fixer.io/latest', {
    params: {
      base: 'EUR',
      symbols: 'GBP,USD'
    }
  });
}

export function fetchCash() {
  return mockAxios.get('/cash');
}

export function updateCash(newState) {
  return new Promise((resolve) => {
    resolve(newState);
  });
}
