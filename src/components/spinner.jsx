import './spinner.scss';

export default function Spinner({text}) {
  return <div>
    <div className='spinner'></div>
    {text && <span>Loading</span>}
  </div>
}
