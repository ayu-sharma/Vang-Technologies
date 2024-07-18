import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import Contact from './Components/Contactus';
import Displayproduct from './Components/Displayproduct';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Scrolltop from './Components/Scrolltop';
import Costumer from './Components/Costumers';
import { useTranslation } from "react-i18next";

function App() {
  const { t  } = useTranslation();
  return (
    <Router>
      <Scrolltop />
      <div className='min-h-[100vh] w-full relative flex flex-col justify-between'>
        <div className='z-10 fixed w-full'>
          <Navbar t={t}/>
        </div>
        <div className='flex-grow mt-16'> {/* added margin-top to avoid overlap with fixed Navbar */}
          <Routes>
            <Route path="/" element={<Home t={t}/>} />
            <Route path="/about" element={<About t={t} />} />
            <Route path="/products" element={<Product t={t} />} />
            <Route path="/products-array/:productId" element={<Displayproduct t={t} />} />
            <Route path="/contact" element={<Contact t={t} />} />
            <Route path="/costumers" element={<Costumer t={t} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
