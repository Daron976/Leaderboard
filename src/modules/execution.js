const dynamicInput = (arr) => {
  arr.forEach((data) => {
    document.querySelector('.scores-data').innerHTML += `
    <li class="score-info">${data.user}: ${data.score}</li>
    `;
  });
};

export default dynamicInput;