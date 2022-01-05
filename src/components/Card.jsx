import { Link } from "react-router-dom";

const Card = ({ title, subtitle, cta, picture, handleBuyButton, identifier }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>

            {picture && <img src={picture} className="card-img-top" alt="..." />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{ subtitle }</p>

                {cta && <Link to={cta} className="btn btn-primary">Go</Link>}

                {handleBuyButton && identifier && <button className="btn btn-success" onClick={() => {handleBuyButton(identifier)}}>Buy me</button>}

            </div>
        </div>
    );
}

/** @info TP */
/** @todo Rajouter un panier dans la nav */
/** @todo au click sur le boutton buy, rajouter l'élément dans le panier */
/** @todo le panier est persisté en localstorage */
/** @todo afficher les éléments du panier sur la route /panier */



















export default Card;
