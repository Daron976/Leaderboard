// import { scoreData } from "./data";

// const uList = document.querySelector('.scores-data');

const dynamicInput = (arr) => {
  arr.forEach((data) => {
    document.querySelector('.scores-data').innerHTML += `
    <li class="score-info">${data.name}: ${data.score}</li>
    `;
  });
};

export default dynamicInput;