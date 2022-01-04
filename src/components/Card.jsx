import { Link } from "react-router-dom";

const Card = ({ title, subtitle, cta, picture }) => {
    return (
        <div className="card" style={{ width: "18rem" }}>

            {picture && <img src={picture} className="card-img-top" alt="..." />}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{ subtitle }</p>

                { cta && <Link to={cta} className="btn btn-primary">Go</Link> }
            </div>
        </div>
    );
}

export default Card;
