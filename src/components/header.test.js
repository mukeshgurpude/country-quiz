import { screen, render } from '@testing-library/react'
import Header from './header'

test('Should be able to show the image', () => {
  render(<Header showImage={true}/>)
  const image = screen.getByRole('img')
  expect(image).toHaveStyle('visibility: initial')
})

test('Ability to hide title image', () => {
  render(<Header showImage={false}/>)
  const image = screen.queryByRole('img')
  expect(image).toBeNull()
})
