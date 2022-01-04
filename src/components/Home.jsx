import data from "../data/product.js"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <>
            {data.product.map((product, id) => {
                return (
                    <div key={product.id} className="card" style={{width: "18rem"}}>
                        <img src={product.picture} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{ product.price } €</p>
                            <p className="card-text">{ product.stock } in stock</p>
                            <Link to={`/product/${product.id}`} className="btn btn-primary">Go</Link>
                        </div>
                    </div>
                )
            })}
        </>
    )

}

export default Home;

/** @TP */
/** @todo Afficher le contenu du product.js dans notre Home en dupliquant le composant de About */
