// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render () {
    const {name, speed, hasRockets, colors} = this.props

    return (
      <div>
        <h1>{name}</h1>
        <h1>{speed}</h1>
        <ul>
        {colors.map((color) => <li>{color}</li>)}
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
