/* eslint-disable */ 

import {jest} from '@jest/globals';
import getInfo from './dataGet';
import postInfo from "./dataSend";

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

test('send data', () => {

  const testData = {
    name: 'jim',
    score: 20
  }

  const execute = postInfo('http//:dummytestdata/game/score',testData);

  expect(execute).resolves.toEqual(dataToBeRecieved);

})

test('retrieve data', () => {
  
  const execute = getInfo();

  expect(execute).resolves.toEqual(dataToBeRecieved);

})
