// eslint-disable-next-line
import _ from 'lodash';
import getInfo from './modules/dataGet.js';
import postInfo from './modules/dataSend.js';
import {
  nameInput,
  scoreInput,
} from './modules/data.js';
import dynamicInput from './modules/execution.js';
import './styles.css';
import validate from './modules/validation.js';

document.getElementById('submit').addEventListener('click', () => {
  if ((nameInput.value === '') || (scoreInput.value === '')) {
    document.getElementById('empty-fields').style.display = 'block';
  } else if (!validate(scoreInput.value)) {
    document.getElementById('empty-fields').style.display = 'none';
    document.getElementById('error-msg').style.display = 'block';
  } else {
    const data = {
      user: nameInput.value,
      score: scoreInput.value,
    };

    postInfo('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/MfLH1qYVhqkJ6fhkqaxK/scores', data);

    nameInput.value = '';
    scoreInput.value = '';
    document.getElementById('empty-fields').style.display = 'none';
    document.getElementById('error-msg').style.display = 'none';
  }
});

document.getElementById('reset').addEventListener('click', () => {
  document.querySelector('.scores-data').innerHTML = '';
  getInfo()
    .then((response) => response.json())
    .then((data) => dynamicInput(data.result));
});

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.scores-data').innerHTML = '';
  getInfo()
    .then((response) => response.json())
    .then((data) => dynamicInput(data.result));
});