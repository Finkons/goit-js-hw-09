import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  inputFormData: document.querySelector('.form'),
  submitButton: document.querySelector('.form button'),
};
let { inputFormData, submitButton } = refs;

submitButton.addEventListener('click', startCreatePromises);
inputFormData.addEventListener('input', getInputData);

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve(Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`));
      } else {
        reject(Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`));
      }
    }, delay);
  });
}

let step = 0;
let delay = 0;
let amount = 0;

function getInputData(e) {
  step = Number(e.currentTarget.step.value);
  delay = Number(e.currentTarget.delay.value);
  amount = Number(e.currentTarget.amount.value);
}

function startCreatePromises(e) {
  e.preventDefault();


  for (let i = 1; i <= amount; i += 1) {
    delay += step;

    createPromise(i, delay)
      .then(success => console.log('✅ Fulfilled promise'))
      .catch(error => console.log('❌ Rejected promise'));
  }
};

