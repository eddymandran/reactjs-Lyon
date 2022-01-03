import { useState } from "react";

// const App = () => {
//   let name = 'Amel';

//   setTimeout(() => {
//     console.log(name);
//     name = 'Noam'
//     console.log(name);
//   }, 1000);

//   return <h3>Hello {name}</h3>
// }

const App = () => {
  let [name, setName] = useState('Amel');

  setTimeout(() => setName('Noam'), 3000)

  return  <h3>Hello {name}</h3>
}

export default App;