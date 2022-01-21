import { useEffect, useState } from "react"
import Spinner from "./spinner";
import Result from './result'
import Question from './question'

async function getData() {
  const data = localStorage.getItem('quizData');
  if (data) {
    return JSON.parse(data);
  }
  return fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(res => {
      localStorage.setItem('quizData', JSON.stringify(res));
      return res;
    })
}

export default function Quiz() {
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState([]);
  const [data, setData] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    questions && setLoading(false);
  }, [questions]);

  useEffect(() => {
    getData().then(ques => {
      const shuffled = ques.sort(() => Math.random() - 0.5);
      setQuestions(shuffled.slice(0, 4));
      setData(shuffled.slice(0, 10))
    })
  }, [])

  function next(res) {
    setScore(s => res ? s + 1 : s);
    setCurrent(c => c + 1);
  }

  return <div id='wrapper'>
    {loading
      ? <Spinner text/>
      :
      (
        current < questions.length
        ? <Question que={questions[current]} data={data} next={next}/>
        : <Result score={score}/>
      )
    }
  </div>
}
