import './App.css';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import { useState } from'react';
import Product from './Components/Product';

function App() { 
  const [selectedOption, setSelectedOption] = useState("home");

  const handleNavOptionClick = (option) => {
    setSelectedOption(option);
  }
  return (
    <div className='min-h-[100vh] relative flex flex-col justify-between'>
      <div className='z-10 fixed w-full'>
      <Navbar className="navbar" handleNavOptionClick={handleNavOptionClick} selectedOption={selectedOption}/>
      </div>
    <div className={``}>
    <div id="home" className={`flex flex-col justify-center items-center`}>
    {selectedOption === "home" && <Home />}
   </div>
   <div id="about" className="flex flex-col justify-center items-center">
   {selectedOption === "about" && <About />}
   </div>
   <div id="about" className="flex flex-col justify-center items-center">
   {selectedOption === "about" && <Product />}
   </div>
    </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
