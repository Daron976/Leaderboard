// import { scoreData } from "./data";

// const uList = document.querySelector('.scores-data');

export const dynamicInput = (arr) => {
  arr.forEach((data) => {
    document.querySelector('.scores-data').innerHTML += `
    <li class="score-info">${data.name}: ${data.score}</li>
    `
  })
}