import { useState } from "react";

const App = () => {
  const persons = ['Khalid', 'Amel', 'Noam'];

  let foreach = persons.forEach(person => { return person +'-------'  });
  let mapped = persons.map(person => { return person + ' -------' });
  let filtered = persons.filter((person, index) => {
    return index !== 1
  });
  
  console.log(filtered);

  return (
    <ul>
      {persons.map((person, index) => {
        return <li key={index}>{ person }</li>
      })}
    </ul>
  );
}

export default App;
