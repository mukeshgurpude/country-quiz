import title from '../title.svg'

export default function Header() {
  return <div className='flex-container' id='title'>
    <h1>Country Quiz</h1>
    <img src={title} alt=''/>
  </div>
}
