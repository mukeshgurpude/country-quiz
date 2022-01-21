import win from '../win.svg'

export default function Result({reset, score}) {
  return <>
    <img src={win} alt=''/>
    <h2 style={{color: 'var(--q-color)', fontWeight: 'bold'}}>Results</h2>
    <p>You got <span style={{color: 'var(--option-correct-bg)', fontSize: '1.5em'}}>{score}</span> correct answers</p>
    <button onClick={reset} id='reset'>Try again</button>
  </>
}
