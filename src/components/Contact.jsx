import { useState } from "react";

const Contact = () => {

    let [form, setForm] = useState({ name: 'Khalid', email: '', message: '' });

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch('http://localhost:5100/contact', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(() => {
                setForm({ name: 'Khalid', email: '', message: '' });
            })
            .catch(error => console.error(error));
    }

    const handleChange = (event) => {
        const newData = { ...form };

        newData[event.target.name] = event.target.value;

        setForm(newData);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" id="name" name="name" className="form-control"
                       value={form['name']}
                       onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="email" className="form-label">Email</label>
                <input type="text" id="email" name="email" className="form-control"
                       value={form['email']}
                       onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="message" className="form-label">Message</label>
                <textarea id="message" name="message" className="form-control"
                          value={form['message']}
                          onChange={handleChange} />
            </div>

            <div><input type="submit" value="Envoyer" className="btn btn-primary" /></div>
        </form>
    );
}

export default Contact;


/** @info TP */
/** @todo faire le cRUD de contact */
/** @info STATE is immutable */