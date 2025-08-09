import { getImagesByQuery } from './js/pixabay-api';
import iziToast from 'izitoast';

import 'izitoast/dist/css/iziToast.min.css';
import {
  clearGallery,
  createGallery,
  hideLoader,
  showLoader,
} from './js/render-functions';

export const refs = {
  galleryElem: document.querySelector('.gallery'),
  loaderJs: document.querySelector('.loader-js'),
  formEl: document.querySelector('.form'),
};
refs.formEl.addEventListener('submit', e => {
  e.preventDefault();
  const query = e.target.elements['search-text'].value.trim();
  clearGallery();
  showLoader();
  if (query.length !== 0) {
    getImagesByQuery(query)
      .then(images => {
        if (images.length > 0) {
          createGallery(images);
        } else {
          iziToast.error({
            message:
              'Sorry, there are no images matching your search query. Please try again!',
            position: 'topRight',
            icon: 'error',
            backgroundColor: '#ef4040',
            iconColor: 'white',
            messageColor: 'white',
          });
        }
      })
      .catch(error => {
        iziToast.error({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          icon: 'error',
          backgroundColor: '#ef4040',
          iconColor: 'white',
          messageColor: 'white',
        });
        console.error(error);
      })
      .finally(() => {
        hideLoader();
      });
  }
  e.currentTarget.reset();
});