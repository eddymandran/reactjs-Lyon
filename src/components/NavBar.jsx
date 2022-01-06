import { Link } from "react-router-dom";

const NavBar = ({cart}) => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse container-fluid" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <Link className="nav-link" to="/" >Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about" >About</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/contact">Admin Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/admin/product">Admin Product</Link>
                    </li>
                </ul>
                <ul className="navbar-nav d-flex">
                    <li className="nav-item">
                        <Link className="btn btn-primary" to="/cart">
                            Panier {cart.length > 0 && <span className="badge bg-light text-dark">{cart.length}</span>}
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
