import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Title } from './Title';
import { Palette } from './Palette';
import { ColourPicker } from './ColourPicker';
import { readColour } from './api';

const defaultOthers = [];
const paletteLimit = 4;

const App = () => {
  const [colours, setColours] = useState(defaultOthers);
  const [paletteFull, setPaletteFull] = useState(false)
  const [data, setData] = useState(null);

  const handlePickColour = v => {
      if (colours.length + 1 > paletteLimit) {
        setPaletteFull(true);
        return;
      }
      setColours(colours => [...colours, v]);
  }

  const handleReset = () => {
    setColours(defaultOthers);
    setPaletteFull(false)
  }
  

  const handleCopy = () => {
    navigator.clipboard.writeText(colours.join(','))
      .then(handleReset);
  }

  return (
    <div>
      <Title>Cool palette builder</Title>
      <Palette colours={colours} />
      <ColourPicker 
        disabled={paletteFull} 
        onReset={handleReset} 
        onPickColour={handlePickColour} 
        handleCopy={handleCopy}
      />
    </div> 
  )
};
  

// ========================================

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
