import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Person extends Component {
  name = 'Noam'

  render() {
    return (
      <>
        <h1>{this.name}</h1>
        <p> est un garçon</p>
      </>
    )
  }
}

ReactDOM.render(<Person />, document.getElementById('root'));
