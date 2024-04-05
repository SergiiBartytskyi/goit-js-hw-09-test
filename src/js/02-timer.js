import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const refs = {
  myInput: document.querySelector('#datetime-picker'),
  startBtn: document.querySelector('[data-start]'),
  daysSpan: document.querySelector('[data-days]'),
  hoursSpan: document.querySelector('[data-hours]'),
  minutesSpan: document.querySelector('[data-minutes]'),
  secondsSpan: document.querySelector('[data-seconds]'),
};

let inputDates = null;
const INTERVAL = 1000;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    inputDates = selectedDates[0];
    onInputData(inputDates);
  },
};
refs.startBtn.setAttribute('disabled', true);
refs.startBtn.addEventListener('click', onClick);

const fp = flatpickr(refs.myInput, options);

function onInputData(data) {
  if (data >= Date.now()) {
    refs.startBtn.removeAttribute('disabled');
  } else {
    refs.startBtn.setAttribute('disabled', true);
    Notify.failure('Please choose a date in the future', {
      position: 'center-top',
      fontSize: '20px',
      width: '500px',
      cssAnimationStyle: 'from-top',
    });
  }
}

function onClick() {
  refs.myInput.setAttribute('disabled', true);
  refs.startBtn.setAttribute('disabled', true);

  const timerId = setInterval(() => {
    const currentDate = new Date();
    const remainingTime = inputDates - currentDate;

    const { days, hours, minutes, seconds } = convertMs(remainingTime);
    refs.daysSpan.textContent = addLeadingZero(days);
    refs.hoursSpan.textContent = addLeadingZero(hours);
    refs.minutesSpan.textContent = addLeadingZero(minutes);
    refs.secondsSpan.textContent = addLeadingZero(seconds);

    if (remainingTime < INTERVAL) {
      clearInterval(timerId);
      Notify.success(`${inputDates} is now`, {
        position: 'center-top',
        fontSize: '20px',
        width: '500px',
        cssAnimationStyle: 'from-top',
      });
    }
  }, INTERVAL);
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}
