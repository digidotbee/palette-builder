import React from 'react';
import { render } from '@testing-library/react';
import { Palette } from './Palette';

test('Palette contains a swatch', () => {
  const container = render(<Palette colours={['#000']} />);
  const element = container.getByTitle('#000');
  expect(element).toHaveAttribute('title', '#000')
})