import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Quiz, { getData } from './quiz';

const setShowImage = jest.fn();

global.fetch = () => Promise.resolve({
  json: () => Promise.resolve(global.countries)
});

test('Data is being saved', async () => {
  const calls = jest.spyOn(global, 'fetch');
  await getData()
  expect(calls).toHaveBeenCalledTimes(1);
  await getData()
  expect(calls).toHaveBeenCalledTimes(1);
});

test('Result is rendered after all questions', async () => {
  render(<Quiz setShowImage={setShowImage} />);

  // Solve all questions
  for (let i = 0; i < 4; i++) {
    const option = await screen.findByTestId('A')
    // eslint-disable-next-line
    act(() => userEvent.click(option))  // mark anser

    const button = await screen.findByRole('button')
    // eslint-disable-next-line
    act(() => userEvent.click(button))  // move to next question
  }
  // Result is rendered
  const result = await screen.findByText(/results/i)
  expect(result).toBeInTheDocument()
  
  // Score is rendered
  const text = await screen.findByText(/you got correct answers/i)
  expect(text).toBeInTheDocument()

  // Reset button is rendered
  const button = await screen.findByRole('button')
  // eslint-disable-next-line
  act(() => userEvent.click(button))
  const option = await screen.findByTestId('A')
  expect(option).toBeInTheDocument()
})
