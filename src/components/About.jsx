import { Outlet } from "react-router-dom";
import Card from "./Card";

const About = () => {
    const persons = [
        { name: 'Khalid', age: 25 },
        { name: 'Amel', age: 4 },
        { name: 'Noam', age: 1 }
    ];

    return (
        <>
            {persons.map((person, index) => {
                return (
                    <Card key={index} title={person.name} subtitle={person.age} cta={'/about/' + person.name} />
                )
            })}

            <hr />
            <hr />
            <hr />
            <hr />

            <Outlet />
        </>
    )
}

export default About;