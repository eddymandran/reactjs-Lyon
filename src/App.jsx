import {Route, Routes} from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import AboutName from './components/AboutName';
import NotFoundAbout from './components/NotFoundAbout';

import ProductDetails from "./components/ProductDetails";


const App = () => {
    return (
        <>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <Routes>
                        <Route path="/" element={<Home/>}/>

                        <Route path="/product/:id" element={<ProductDetails/>}/>

                        <Route path="/about" element={<About/>}>
                            <Route index element={<Home/>}/>
                            <Route path="/about/:name" element={<AboutName/>}/>
                            <Route path="/about/:name/toto" element={<NotFound/>}/>
                        </Route>


                        <Route path="/about/*" element={<NotFoundAbout/>}/>

                        <Route path="/contact" element={<Contact/>}/>

                        <Route path="*" element={<NotFound/>}/>
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App;
