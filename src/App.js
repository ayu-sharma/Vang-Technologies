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

function App() {
  return (
    <Router>
      <Scrolltop />
      <div className='min-h-[100vh] w-full relative flex flex-col justify-between'>
        <div className='z-10 w-full'>
          <Navbar/>
        </div>
        <div className='flex-grow'> {/* added margin-top to avoid overlap with fixed Navbar */}
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/about" element={<About/>} />
            <Route path="/products" element={<Product/>} />
            <Route path="/products-array/:productId" element={<Displayproduct/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/costumers" element={<Costumer/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
