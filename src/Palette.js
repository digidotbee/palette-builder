import React from 'react';
import './palette.css';
import { Swatch } from './Swatch';


export const Palette = ({colours = []}) => (
  <div className="palette">
    {colours.map(
      colour => <Swatch key={colour} colour={colour} />
      )}
  </div>
);