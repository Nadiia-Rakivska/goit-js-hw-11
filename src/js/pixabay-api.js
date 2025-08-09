import axios from 'axios';
import { clearGallery, hideLoader, showLoader } from './render-functions';

export function getImagesByQuery(query) {
  const BASE_URL = 'https://pixabay.com';
  const END_POINT = '/api/';
  const params = new URLSearchParams({
    q: query,
    key: '51658185-19ae36e73b0aa030a4154053e',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  const url = `${BASE_URL}${END_POINT}?${params}`;
  return axios.get(url).then(response => response.data.hits);
}
