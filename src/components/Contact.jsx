import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Contact = () => {
    const params = useParams();

    let [form, setForm] = useState({ name: 'Khalid', email: '', message: '' });

    const handleCreate = (event) => {
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

    useEffect(() => {
        if (!params.id) return;

        fetch(`http://localhost:5100/contact/${params.id}`)
            .then(response => response.json())
            .then(contact => { setForm(contact) })
            .catch(error => console.error(error));
    }, []);

    const handleEdit = (event) => {
        event.preventDefault();
        console.log('edit');

        fetch(`http://localhost:5100/contact/${params.id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(contact => {
                setForm(contact);
            })
            .catch(error => console.error(error));
    }

    return (
        <form onSubmit={params.id ? handleEdit : handleCreate}>
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

            <div><input type="submit" value={params.id ? 'Modifier' : 'Créer'} className="btn btn-primary" /></div>
        </form>
    );
}

export default Contact;


/** @info TP */
/** @todo faire le cRUD de contact */
/** @info STATE is immutable */