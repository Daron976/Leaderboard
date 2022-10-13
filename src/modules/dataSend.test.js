/* eslint-disable */ 

import postInfo from "./dataSend";

const dataToBeRecieved = 'Data recieved correctly'

global.fetch = jest.fn((url, data) => {
  return new Promise ((resolve, reject) => {
      json:() => {
        return new Promise((resolve, reject) => {
          resolve(dataToBeRecieved)
        })
    }
  })
})

test('send data', () => {

  const testData = {
    name: 'jim',
    score: 20
  }

  const execute = postInfo('http//:dummytestdata/game/score',testData);

  expect(execute).resolves.toEqual(dataToBeRecieved);

})