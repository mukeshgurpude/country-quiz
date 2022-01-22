/* global countries */

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { getQuestion } from '../utils/question';
import Question from './question'

let i = 0
const next = jest.fn(() => i++)

test('Should render without error', () => {
  render(<Question que={countries[i]} data={countries} next={next}/>)
  expect(screen.queryByRole('button')).not.toBeInTheDocument()
})

test('Next button is visible after selection', () => {
  render(<Question que={countries[i]} data={countries} next={next}/>)
  const option = screen.getAllByRole((_, n) => n.classList.contains('option'))[0]
  expect(option).toBeInTheDocument()
  userEvent.click(option)

  expect(screen.getByRole('button')).toBeInTheDocument()
  userEvent.click(screen.getByRole('button'))
  expect(next).toHaveBeenCalledTimes(1)
})

test('Options can be selected only once', () => {
  render(<Question que={countries[i]} data={countries} next={next}/>)
  const options = screen.getAllByRole((_, n) => n.classList.contains('option'))
  expect(options.length).toBeGreaterThan(1)
  userEvent.click(options[0])
  userEvent.click(options[1])

  expect(options[1]).not.toHaveClass('wrong')
})

test('Flag should be rendered in flag question', () => {
  render(<Question que={countries[i]} data={countries} next={next} t={0}/>)
  const flag = screen.getByRole('img')
  expect(flag).toBeInTheDocument()
})
