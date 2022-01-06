import { useNavigate, useParams } from 'react-router-dom';
import {useState, useEffect} from 'react';

const ProductForm = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [form, setForm] = useState({name: '', price: '', stock: '', picture: ''})

    const handleCreate = (event) => {
        event.preventDefault();

        fetch('http://localhost:5100/product', {
            headers: { 'Content-Type': 'application/json' },
            method: 'POST',
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(() => {
                setForm({name: '', price: '', stock: '', picture: ''});
                navigate('/admin/product')
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

        fetch(`http://localhost:5100/product/${params.id}`)
            .then(response => response.json())
            .then(product => { setForm(product) })
            .catch(error => console.error(error));
    }, [params.id]);

    const handleEdit = (event) => {
        event.preventDefault();

        fetch(`http://localhost:5100/product/${params.id}`, {
            headers: { 'Content-Type': 'application/json' },
            method: 'PUT',
            body: JSON.stringify(form)
        })
            .then(response => response.json())
            .then(product => {
                setForm(product);
                navigate('/admin/product');
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
                <label htmlFor="price" className="form-label">Price</label>
                <input type="text" id="price" name="price" className="form-control"
                       value={form['price']}
                       onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="stock" className="form-label">Stock</label>
                <input type="text" id="stock" name="stock" className="form-control"
                       value={form['stock']}
                       onChange={handleChange} />
            </div>
            <div>
                <label htmlFor="picture" className="form-label">Picture</label>
                <input type="text" id="picture" name="picture" className="form-control"
                       value={form['picture']}
                       onChange={handleChange} />
            </div>

            <div><input type="submit" value={params.id ? 'Modifier' : 'Créer'} className="btn btn-primary" /></div>
        </form>
    )
}

export default ProductForm;