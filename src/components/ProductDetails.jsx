import { useParams } from 'react-router-dom';
import data from '../product';
import Card from './Card';

const ProductDetails = () => {
    const params = useParams();

    const product = data.product.find(product => product.id === parseInt(params.id));

    return <Card title={product.name} subtitle={product.price} />
}

export default ProductDetails;
