const scaleSmaller = document.querySelector('.scale__control--smaller');
const scaleBigger = document.querySelector('.scale__control--bigger');
const scaleValue = document.querySelector('.scale__control--value');
const imgPreview = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;


const changeScale = (num) => {
  scaleValue.value = `${num}%`;
  imgPreview.style.transform = `scale(${num / 100})`;
};

scaleSmaller.addEventListener('click', () => {
  const currentValue = parseInt(scaleValue.value, 10)
  const newValue = Math.max(currentValue - SCALE_STEP, MIN_SCALE)
  changeScale(newValue);
});

scaleBigger.addEventListener('click', () => {
  const currentValue = parseInt(scaleValue.value, 10)
  const newValue = Math.min(currentValue + SCALE_STEP, MAX_SCALE)
  changeScale(newValue);
});

const resetScale = () => {
  changeScale(100);
};


export { resetScale };


