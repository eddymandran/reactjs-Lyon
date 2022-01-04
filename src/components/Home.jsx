import data from '../product';
import Card from './Card';

const Home = () => {
    return (
        data.product.map((product, index) => {
            return (
                <Card key={index}
                      title={product.name}
                      subtitle={product.price}
                      cta={`/product/${product.id}`}
                      picture={product.picture}
                />
            )
        })
    )
}

export default Home;

/** @TP */
/** @todo Afficher le contenu du product.json dans notre Home en dupliquant le composant de About */