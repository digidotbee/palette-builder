import React from 'react';
import { render } from '@testing-library/react';
import { Title } from './Title';

test('renders an h1 with text', () => {
  const text = `Hello`;
  const container = render(<Title>{text}</Title>);
  const element = container.getByText(text);
  expect(element).toHaveClass('title');
  expect(element).toBeVisible();
})