import { DateTime } from './luxon.js';

const displaytime = document.querySelector('.time');

// eslint-disable-next-line import/prefer-default-export
export const getTime = () => {
  const today = DateTime.local();
  const now = today.toLocaleString(DateTime.DATETIME_FULL_WITH_SECONDS);
  displaytime.textContent = now;
};
