import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ColourPicker } from './ColourPicker';

test('ColourPicker has Choose and Reset buttons', () => {
  const container = render(<ColourPicker />);
  const chooseButton = container.getByText(/choose colour/i);
  const resetButton = container.getByText(/reset/i);
  expect(chooseButton).toBeVisible();
  expect(resetButton).toBeVisible();
});

test('ColourPicker has Copy and Reset buttons', () => {
  const container = render(<ColourPicker disabled />);
  const chooseButton = container.getByText(/copy/i);
  const resetButton = container.getByText(/reset/i);
  expect(chooseButton).toBeVisible();
  expect(resetButton).toBeVisible();
});

test('Reset button calls handler', () => {
  const fn = jest.fn();
  const container = render(<ColourPicker onReset={fn} />);
  const resetButton = container.getByText(/reset/i);
  fireEvent.click(resetButton);

  expect(fn).toHaveBeenCalled();
});