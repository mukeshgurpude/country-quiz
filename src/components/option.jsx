export default function Option({text, selected, ans, id, select}) {
  const state = {class: 'option'}
  const alpha = 'ABCDEFGH'.split('')

  if (selected) {
    if (ans === text) state.class += ' correct'
    else if (selected === text) state.class += ' wrong'
  }
  return <div data-id={alpha[id]} className={state.class} onClick={() => select(text)}>
    <span>{text}</span>
  </div>
}
