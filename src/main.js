import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchFromPixabay } from './js/pixabay-api';
import { renderGallery, resetGallery } from './js/render-functions';

const refs = {
  form: document.querySelector('form'),
  loader: document.querySelector('.loader'),
};
refs.form.addEventListener('submit', onSubmit);
loaderStop();

function onSubmit(event) {
  event.preventDefault();
  const form = event.target;
  loaderStart();
  if (!form.elements['search-text'].value.trim()) {
    iziToast.show({
      message: 'Please, enter something for us to look for',
      title: 'Warning',
      backgroundColor: 'yellow',
      position: 'topRight',
    });
  } else {
    resetGallery();
    fetchFromPixabay(form.elements['search-text'].value)
      .then(resalt => {
        console.log(resalt);
        loaderStop();
        if (resalt.hits.length == 0) {
          iziToast.error({
            message: 'No resalt found',
            position: 'topRight',
          });
        }
        renderGallery(resalt.hits);
      })
      .catch(error => {
        console.log(error);
      });
    form.reset();
  }
}

function loaderStart() {
  refs.loader.className = 'loader';
}
function loaderStop() {
  refs.loader.className = '';
}
