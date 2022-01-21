import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Option from './option'

test('Component renders successfully', () => {render(<Option />)})

test('Classes are rendered as per choice', () => {
  const {rerender} = render(<Option text='10' selected={null} ans='10' id={0}/>)
  let button = screen.getByTestId('A')
  expect(button).toHaveClass('option')
  expect(button).not.toHaveClass('correct')

  rerender(<Option text='10' selected='10' ans='10' id={0}/>)
  expect(button).toHaveClass('correct')
  expect(button).not.toHaveClass('wrong')
  
  rerender(<Option text='10' selected='10' ans='20' id={0}/>)
  expect(button).not.toHaveClass('correct')
  expect(button).toHaveClass('wrong')

  rerender(<Option text='10' selected='20' ans='30' id={0}/>)
  expect(button).not.toHaveClass('correct')
  expect(button).not.toHaveClass('wrong')
})

test('Able to select the option', () => {
  const select = jest.fn()
  render(<Option text='10' selected={null} ans='10' id={0} select={select}/>)
  let button = screen.getByTestId('A')
  userEvent.click(button)
  expect(select).toHaveBeenCalledTimes(1)
})
