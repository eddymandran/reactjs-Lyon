import { useState } from "react";

const Contact = () => {

    let [form, setForm] = useState({ name: 'Khalid', email: 'email@email.com', message: '' });

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form);
    }

    const handleChange = (event) => {
        const newData = { ...form };
        const name = event.target.name;

        newData[name] = event.target.value;

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
