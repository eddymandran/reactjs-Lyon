import { useEffect, useState } from 'react';
import Card from './Card';

const Home = ({handleBuyButton}) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5100/product')
            .then(response => response.json())
            .then(products => setProducts(products))
            .catch(error => console.error(error));
    }, [])

    return (
        products.map((product, index) => {
            return (
                <Card key={index}
                      title={product.name}
                      subtitle={product.price}
                      cta={`/product/${product.id}`}
                      picture={product.picture}
                      handleBuyButton={handleBuyButton}
                      identifier={product.id}
                />
            )
        })
    )
}

export default Home;

/** @TP */
/** @todo Afficher le contenu du product.json dans notre Home en dupliquant le composant de About */