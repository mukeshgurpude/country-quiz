import title from '../title.svg'

export default function Header({showImage}) {
  return <div className='flex-container' id='title'>
    <h1>Country Quiz</h1>
    <img src={title} alt='' style={{
      visibility: showImage ? 'initial' : 'hidden'
    }} />
  </div>
}
