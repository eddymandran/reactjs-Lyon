import { Routes, Route } from 'react-router-dom';
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import NotFound from './components/NotFound';
import NavBar from './components/NavBar';
import AboutName from './components/AboutName';

const App = () => {
    return (
        <>
            <NavBar />
            <div className="container">
                <div className="row">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/about/:name" element={<AboutName />} />

                        <Route path="/contact" element={<Contact />} />

                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default App;
