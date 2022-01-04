import {Link, useParams} from 'react-router-dom';
import data from "../data/product.js"


const ProductDetails = () => {
    const params = useParams();

    const product = data.product.find(product => product.id === parseInt(params.id));

    return (
        <div key={product.id} className="card" style={{width: "18rem"}}>
            <img src={product.picture} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{ product.price }</p>
                <Link to="/" className="btn btn-primary">Go back</Link>
            </div>
        </div>
    )
}

export default ProductDetails