/* global countries */
import { getQuestion } from './question';


test('Check all return types', () => {
  const data = getQuestion(countries[0], countries);
  expect(typeof data).toBe('object');
  expect(data).toHaveProperty('question', expect.any(String));
  expect(data).toHaveProperty('answer', expect.any(String));
  expect(data).toHaveProperty('options', expect.any(Array));
})

test('Check the options', () => {
  const data = getQuestion(countries[0], countries)
  expect(data.options.length).toBe(4);
  expect(data.options).toContain(data.answer);
})

test('Check all question types', () => {
  const data = getQuestion(countries[0], [])
  expect(data.question).toBeNull();
  expect(data.options).toHaveLength(0);
  for (let i = 0; i < 5; i++) {
    getQuestion(countries[0], countries, i);
  }
})

test('Results should be correct', () => {
  let data = getQuestion(countries[0], countries, 0);
  expect(data.options).toContain(data.answer);
  expect(data.options).toHaveLength(4);
  expect(data.flag).toBeTruthy()

  for (let i = 1; i < 4; i++) {
    data = getQuestion(countries[0], countries, i);
    expect(data.options).toContain(data.answer);
    expect(data.options).toHaveLength(4);
    expect(data.flag).toBeNull()
  }
})
