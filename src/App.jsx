/** @info intro to state */
// let state = useState();
// console.log(state)

/** @info setState */
// let [name, setName] = useState('Khalid');
// setTimeout(() => setName('Noemie'), 1000);

// return <h3>Hello {name}</h3>;

/** @info event */
// let [name, setName] = useState('Khalid');

// const handleChangeName = () => {
//   setName('Noemie');
// }

// return (
//   <>
//     <button onClick={handleChangeName}>Change name</button>
//     <h3>Hello {name}</h3>
//   </>
// )

/** @info loop */
// let [names] = useState(['Khalid', 'Noemie', 'Amel', 'Noam']);

// return (
//   <>
//     <button>Change name</button>
//     <ul>
//       { names.map((name, index) => <li key={index}>Hello {name}</li>)}
//     </ul>
//   </>
// )

import {useState} from "react";

/** @info Styles */
// let [names] = useState(['Khalid', 'Noemie', 'Amel', 'Noam']);

// let liBackgroundColor = { backgroundColor: 'blue' }

// return (
//   <>
//     <button style={{ backgroundColor: 'red' }}>Change name</butto  n>
//     <ul>
//       {names.map((name, index) => <li key={index} style={liBackgroundColor}>Hello {name}</li>)}
//     </ul>
//   </>
// )

const App = () => {
    const persons = ['Khalid', 'Amel', 'Noam', 'Noemie'];
    let [currentActive, setCurrentActive] = useState(0);

    const listStyle = {
        backgroundColor: 'lightblue'
    }

    function handleNextClick() {
        console.log('before ', currentActive);

        if (currentActive === persons.length - 1) {
            setCurrentActive(0);
            return;
        }

        setCurrentActive(++currentActive);
        console.log('after ', currentActive);
    }

    return (
        <>
            <button style={{backgroundColor: 'coral'}} onClick={handleNextClick}>Next</button>
            <ul>
                {persons.map((person, index) => {
                    return <li key={index} style={currentActive === index ? listStyle : { backgroundColor: 'transparent' }}>
                        {person}
                    </li>
                })}
            </ul>
        </>
    );
}

/** @info TP */
/** @todo afficher un background bleu sur le premier élément de la liste */
/** @todo quand on clique sur le bouton, on affiche le background bleu sur le prochain élément */
/** @todo quand on a fini la liste on reaffiche le background bleu sur le premier élément */

export default App;
