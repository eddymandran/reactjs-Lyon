import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const DeliveryAddress = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ name: '', address: '' });

    useEffect(() => {
        const address = localStorage.getItem('address');
        if (!address) {
            return;
        }

        setForm(JSON.parse(address));
    }, [])

    const handleSubmit = (event) => {
        event.preventDefault();
        localStorage.setItem('address', JSON.stringify(form));

        navigate('/payment');
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
                <label htmlFor="address" className="form-label">Address</label>
                <input type="text" id="address" name="address" className="form-control"
                       value={form['address']}
                       onChange={handleChange} />
            </div>

            <div><input type="submit" value="Passer au paiement" className="btn btn-info" /></div>
        </form>
    )
}

export default DeliveryAddress;