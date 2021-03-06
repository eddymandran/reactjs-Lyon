import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import AboutName from './components/AboutName';
import NotFoundAbout from './components/NotFoundAbout';
import ProductDetails from './components/ProductDetails';
import ContactList from './components/ContactList';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import { useEffect, useState } from 'react';
import Cart from './components/Cart';
import Payment from './components/Payment';
import DeliveryAddress from './components/DeliveryAddress';

const App = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (!cart.length) return;

        localStorage.setItem('cart', JSON.stringify(cart))
    }, [cart]);

    useEffect(() => {
        const cartInLocalStorage = localStorage.getItem('cart');

        if (!cartInLocalStorage) return;

        setCart(JSON.parse(cartInLocalStorage));
    }, []);

    const handleBuyButton = (id) => {
        let cartItem = {};
        let newCart = [...cart]

        let cartItemExists = newCart.find(cartItem => {
            if (cartItem.id === id) {
                cartItem.quantity++;
            }
            return cartItem.id === id
        });

        if (!cartItemExists) {
            cartItem = { id: id, quantity: 1 };
            newCart.push(cartItem);
        }

        setCart(newCart);
    }

    const resetCart = () => {
        setCart([]);
    }

    return (
        <>
            <NavBar cart={cart} />

            <div className="container">
                <div className="row">
                    <Routes>
                        <Route path="/" element={<Home handleBuyButton={handleBuyButton} />} />

                        <Route path="/about" element={<About />}>
                            <Route path="/about/:name" element={<AboutName />} />
                            <Route path="/about/*" element={<NotFoundAbout />} />
                        </Route>

                        <Route path="/product/:id" element={<ProductDetails />} />

                        <Route path="/contact/" element={<Contact />} />
                        <Route path="/admin/contact/:id/edit" element={<Contact />} />
                        <Route path="/admin/contact" element={<ContactList />} />

                        <Route path="/admin/product" element={<ProductList />} />

                        <Route path="/admin/product/new" element={<ProductForm />} />
                        <Route path="/admin/product/:id/edit" element={<ProductForm />} />

                        <Route path="/cart/" element={<Cart cartInLocalStorage={cart} />} />

                        <Route path="/delivery-address/" element={<DeliveryAddress />} />

                        <Route path="/payment/" element={<Payment cartInLocalStorage={cart} resetCart={resetCart} />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App;
