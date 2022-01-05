import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ContactList = () => {
    const [contacts, setContacts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5100/contact')
            .then(response => response.json())
            .then(contacts => {
                setContacts(contacts);
            });
    }, []);

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
                    <tr>
                        <th scope="row">{contact.id}</th>
                        <td>{contact.name}</td>
                        <td>{contact.email}</td>
                        <td>
                            <Link className="btn btn-primary" to={`/contact/${contact.id}/edit`}>Edit</Link>
                            <button className="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}

export default ContactList;
