/* eslint-disable */ 

document.body.innerHTML = `
<section class="main-content">
 <ul class="scores-data"></ul>
</section>
`;


 import dynamicInput from "./execution";

 test('check if list item is present', () => {

  const testData = [
    {
      name: 'jim',
      score: 20
    }
  ]

  dynamicInput(testData);

  const list = document.getElementsByClassName('score-info');
  expect(list).toBeDefined();

 })