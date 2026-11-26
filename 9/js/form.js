const uploadForm = document.querySelector('.img-upload__form');
const uploadInput = uploadForm.querySelector('.img-upload__input');
const uploadOverlay = uploadForm.querySelector('.img-upload__overlay');
const cancelButton = uploadForm.querySelector('.img-upload__cancel');
const hashtagsInput = uploadForm.querySelector('.text__hashtags');
const descriptionInput = uploadForm.querySelector('.text__description');

const pristine = new Pristine(uploadForm, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

const openUploadForm = () => {
  uploadOverlay.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const closeUploadForm = () => {
  uploadOverlay.classList.add('hidden');
  document.body.classList.remove('modal-open');

  uploadForm.reset();

  uploadInput.value = '';

  if (pristine) {
    pristine.reset();
  }
};

uploadInput.addEventListener('change', () => {
  if (uploadInput.files.length > 0) {
    openUploadForm();
  }
});

cancelButton.addEventListener('click', closeUploadForm);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape') {
    if (!uploadOverlay.classList.contains('hidden')) {
      if (document.activeElement === hashtagsInput || document.activeElement === descriptionInput) {
        return;
      }
      closeUploadForm();
    }
  }
});


const validateHashtags = (value) => {
  if (value.trim() === '') {
    return true;
  }

  const hashtags = value.trim().toLowerCase().split(/\s+/);


  if (hashtags.length > 5) {return false;}

  const seen = new Set();

  for (const tag of hashtags) {
    if (!tag.startsWith('#')) {return false;}
    if (tag === '#') {return false;}
    if (tag.length > 20) {return false;}

    if (!/^#[a-zа-яё0-9]+$/i.test(tag)) {return false;}
    if (seen.has(tag)) {return false;}
    seen.add(tag);
  }

  return true;
};


const validateDescription = (value) =>  value.length <= 140;


pristine.addValidator(hashtagsInput, validateHashtags, 'Неверный формат хэштегов');
pristine.addValidator(descriptionInput, validateDescription, 'Комментарий не должен превышать 140 символов');

uploadForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const isValid = pristine.validate();

  if (isValid) {
    // eslint-disable-next-line no-console
    console.log('Форма заполнена верно! Можно отправлять на сервер.');
  } else {
    // eslint-disable-next-line no-console
    console.log('Есть ошибки в заполнении формы.');
  }
});


