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



const App = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row">
                    <Routes>
                        <Route path="/" element={<Home />} />

                        <Route path="/about" element={<About />}>
                            <Route path="/about/:name" element={<AboutName />} />
                            <Route path="/about/*" element={<NotFoundAbout />} />
                        </Route>

                        <Route path="/product/:id" element={<ProductDetails />} />

                        <Route path="/contact/" element={<Contact />} />
                        <Route path="/admin/contact/:id/edit" element={<Contact />} />
                        <Route path="/admin/contact" element={<ContactList />} />

                        <Route path="/admin/product" element={<ProductList />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App;
