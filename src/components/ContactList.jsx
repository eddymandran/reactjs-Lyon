import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContactList = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:5100/contact')
            const contacts = await response.json()
            setContacts(contacts);
        }

        fetchData();
    }, []);

    const handleDelete = (id) => {
        fetch(`http://localhost:5100/contact/${id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(() => {
                setContacts(contacts.filter(contact => contact.id !== id));
            })
            .catch(error => console.error(error));
    }

    return (
        <table className="table">
            <thead className="thead-dark">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
            {contacts.map(contact => {
                return (
                    <tr key={contact.id}>
                        <th scope="row">{contact.id}</th>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>
                            <Link className="btn btn-primary" to={`/admin/contact/${contact.id}/edit`}>Edit</Link>
                            <button className="btn btn-danger" onClick={() => {handleDelete(contact.id)}}>Delete</button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default ContactList;
