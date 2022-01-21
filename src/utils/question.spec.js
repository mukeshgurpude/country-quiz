import { getQuestion } from './question';

const countries = [{
    name: {common: 'India'},
    capital: 'New Delhi',
    population: '1,26,000,000',
    region: 'Asia',
    flag: 'IND'
  }, {
    name: {common: 'China'},
    capital: 'Beijing',
    population: '1,36,000,000',
    region: 'Asia',
    flag: 'CHN'
  }, {
    name: {common: 'United States of America'},
    capital: 'Washington, D.C.',
    population: '320,000,000',
    region: 'North America',
    flag: 'USA'
  }, {
    name: {common: 'Brazil'},
    capital: 'Brasilia',
    population: '200,000,000',
    region: 'South America',
    flag: 'BRA'
  }, {
    name: {common: 'Russia'},
    capital: 'Moscow',
    population: '140,000,000',
    region: 'Europe',
    flag: 'RUS'
  }, {
    name: {common: 'Japan'},
    capital: 'Tokyo',
    population: '126,000,000',
    region: 'Asia',
    flag: 'JPN'
}]

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
