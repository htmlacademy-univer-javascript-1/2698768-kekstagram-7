const effectsList = document.querySelector('.effects__list');
const effectLevel = document.querySelector('.img-upload__effect-level');
const effectLevelValue = document.querySelector('.effect-level__value');
const effectLevelSlider = document.querySelector('.effect-level__slider');
const uploadPreview = document.querySelector('.img-upload__preview img');


const EFFECTS = {
  none: { min: 0, max: 1, step: 0.1, filter: 'none', unit: '' },
  chrome: { min: 0, max: 1, step: 0.1, filter: 'grayscale', unit: '' },
  sepia: { min: 0, max: 1, step: 0.1, filter: 'sepia', unit: '' },
  marvin: { min: 0, max: 100, step: 1, filter: 'invert', unit: '%' },
  phobos: { min: 0, max: 3, step: 0.1, filter: 'blur', unit: 'px' },
  heat: { min: 1, max: 3, step: 0.1, filter: 'brightness', unit: '' }
};


let currentEffect = 'none';


noUiSlider.create(effectLevelSlider, {
  range: { min: 0, max: 1 },
  start: 1,
  step: 0.1,
  connect: 'lower',
});


const applyFilter = (value) => {
  effectLevelValue.value = value;

  if (currentEffect === 'none') {
    uploadPreview.style.filter = 'none';
    return;
  }

  const effect = EFFECTS[currentEffect];
  uploadPreview.style.filter = `${effect.filter}(${value}${effect.unit})`;
};


effectsList.addEventListener('change', (event) => {
  if (event.target.name !== 'effect') {return;}

  currentEffect = event.target.value;
  const effect = EFFECTS[currentEffect];

  if (currentEffect === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }

  effectLevelSlider.noUiSlider.updateOptions({
    range: { min: effect.min, max: effect.max },
    start: effect.max,
    step: effect.step,
  });

  applyFilter(effect.max);
});

effectLevelSlider.noUiSlider.on('update', (values) => {
  const value = parseFloat(values[0]);
  applyFilter(value);
});

export const resetEffects = () => {
  currentEffect = 'none';
  document.querySelector('#effect-none').checked = true;
  effectLevel.classList.add('hidden');
  uploadPreview.style.filter = 'none';
  effectLevelValue.value = '';
};

