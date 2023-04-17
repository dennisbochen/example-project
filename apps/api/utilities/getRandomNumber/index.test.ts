import { getRandomNumber } from './index';

const testData = [
  { min: 1, max: 10 },
  { min: 10, max: 20 },
  { min: 50, max: 75 },
  { min: -10, max: 0 },
  { min: -30, max: -10 },
];

test.each(testData)('.randomNumber($min, $max)', ({ min, max }) => {
  const randomNumber = getRandomNumber(min, max);
  expect(randomNumber).toBeLessThanOrEqual(max);
  expect(randomNumber).toBeGreaterThanOrEqual(min);
});
