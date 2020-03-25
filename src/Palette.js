import React from 'react';
import './palette.css';

export const Palette = ({colours = []}) => (
  <div className="palette">
    {colours.map(
      colour => 
        <div 
          title={colour} 
          className="colour" 
          style={{ backgroundColor: colour.hex}}>
            <p className="colour-name">{colour.name}</p>
        </div>
    )}
  </div>
);