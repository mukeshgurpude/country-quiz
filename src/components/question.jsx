import { useEffect, useState } from "react";
import Option from './option';
import { getQuestion } from "../utils/question";

export default function Question({que, data, next, t}) {
  const [q, setData] = useState(getQuestion(que, data, t));
  const [selected, setSelected] = useState(null);

  function chose(value) {
    if (selected) return
    setSelected(value);
  }

  useEffect(() => {
    setData(getQuestion(que, data))
  }, [que, data])

  return <>
    <div className='question' style={{padding: q?.flag ? '0':'20px'}}>
      {q?.flag && <img height='60px' src={que.flags.svg} alt='flag'/>}
      <h2 style={{textAlign: 'center'}}>{q.question}</h2>
    </div>
    <div className='flex-container column' style={{gap: '.5em'}}>
      {
        q.options.map((o, i) => <Option text={o} selected={selected} ans={q.answer} select={chose} id={i} key={o}/>)
      }
    </div>
    { selected && <button onClick={() => {
      setSelected(null);
      next(selected === q.answer)
    }}>Next</button>
    }
  </>
}
