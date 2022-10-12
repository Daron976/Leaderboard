// eslint-disable-next-line
import _ from 'lodash';
import getInfo from './modules/dataGet';
import postInfo from './modules/dataSend';
import { 
  nameInput, 
  scoreInput } from './modules/data';
import dynamicInput from './modules/execution';
import './styles.css';


document.querySelectorAll('.btn')[1].addEventListener('click', () => {
  const data = {
    user: nameInput.value,
    score: scoreInput.value,
  };
  
  postInfo('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/lo7BETKEBv4khCfPtazj/scores', data);

  nameInput.value = '';
  scoreInput.value = '';
});

document.getElementById('reset').addEventListener('click', () => {
  document.querySelector('.scores-data').innerHTML = '';
  
  getInfo()
    .then(response => response.json())
    .then(data => dynamicInput(data.result))
})
