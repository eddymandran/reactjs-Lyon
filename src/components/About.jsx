const About = () => {
    const persons = [
        { name: 'Khalid', age: 25 },
        { name: 'Amel', age: 4 },
        { name: 'Noam', age: 1 }
    ];

    return (
        persons.map((person, index) => {
            return (
                <div key={index} className="card" style={{width: "18rem"}}>
                    <img src="..." className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{person.name}</h5>
                        <p className="card-text">{ person.age }</p>
                        <a href="/#" className="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            )
        })
    )
}

export default About;