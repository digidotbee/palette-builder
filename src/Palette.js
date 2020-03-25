import React from 'react';
import './palette.css';
import { readColour } from './api';

class Swatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''}
  }

  componentDidMount() {
    readColour(this.props.colour)
      .then(data => this.setState({name: data.name.value}))
  }
  
  render() {
    return (
      <div 
          title={this.props.colour} 
          className="colour" 
          style={{ backgroundColor: this.props.colour}}>
            {this.state.name && <p className="colour-name">{this.state.name}</p>}
        </div>
    )
  }
}

export const Palette = ({colours = []}) => (
  <div className="palette">
    {colours.map(
      colour => <Swatch colour={colour} />
      )}
  </div>
);