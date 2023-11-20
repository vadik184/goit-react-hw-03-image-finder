import axios from 'axios';

const key = '40086351-1ecfc0e91427dffbd1011d9dc';

axios.defaults.baseURL = 'https://pixabay.com/api';

export const findImages = async (query, page) => {
  const params = new URLSearchParams({
    key: key,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 12,
    page: page,
  });

  const response = await axios.get(`/?${params.toString()}`);
  return response.data;
};
