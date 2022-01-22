export function getQuestion(que, countries, i) {
  const type = ['flag', 'capital', 'population', 'region'][i ?? Math.floor(Math.random() * 4)];
  
  const data = {
    question: null,
    answer: null,
    options: [],
    flag: null
  }
  if (countries.length === 0) return data;
  const options = new Set();

  switch (type) {
    case 'flag':
      data.question = 'Which country does this flag belong to?';
      data.answer = que.name.common;
      data.flag = que.flag;
      while (options.size < 3) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        if (country.name.common !== data.answer) {
          options.add(country.name.common);
        }
      }
      break;
    case 'population':
      data.question = `What is the population of ${que.name.common}?`;
      data.answer = que.population;
      while (options.size < 3) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        if (country.population !== data.answer) {
          options.add(country.population);
        }
      }
      break
    case 'region':
      data.question = `What is the region of ${que.name.common} country?`;
      data.answer = que.region;
      while (options.size < 3) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        if (country.region !== data.answer) {
          options.add(country.region);
        }
      }
      break
    case 'capital':
      data.question = `${que.capital} is the capital of which country?`;
      data.answer = que.name.common;
      while (options.size < 3) {
        const country = countries[Math.floor(Math.random() * countries.length)];
        if (country.name.common !== data.answer) {
          options.add(country.name.common);
        }
      }
      break
    default:
  }
  options.add(data.answer);
  data.options = [...options].sort(() => Math.random() - 0.5);
  return data;
}
