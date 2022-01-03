import React from 'react';
import ReactDOM from 'react-dom';

const Person = () => {
  const name = 'Noam';

  return (
    <>
      <h1>{name}</h1>
      <p> est un garçon</p>
    </>
  )
}

ReactDOM.render(<Person />, document.getElementById('root'));
