/* eslint-disable */ 

import getInfo from './dataGet';

const dataToBeRecieved = {
    name: 'jim',
    score: 20
  }

global.fetch = jest.fn((url, data) => {
  return new Promise ((resolve, reject) => {
    const newResponse = {
      user: 'jim',
      score: 20,
      json() {
        return new Promise((resolve, reject) => {
          resolve(dataToBeRecieved)
        })
      }
    }
  })
})

test('retrieve data', () => {
  
  const execute = getInfo();

  expect(execute).resolves.toEqual(dataToBeRecieved);

})
