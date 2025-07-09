
import './App.css';

import Footer from './componts/footer.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './componts/Home.js';
import Feature from './componts/Feature.js';
import Navbar from './componts/Navbar.js';
import Shop from './componts/Shop.js';
import Contact from './componts/Contact.js';
import {CartProvider} from './componts/CartContext.js'
import BestSelling from './componts/BestSelling.js';
import Details from './componts/Details.js';
import { AuthProvider } from './componts/AuthContext.js';
import Explore from './componts/Explore.js';



function App() {
  

  return (
    <div className='mainBody'>
      
      <BrowserRouter>
        <AuthProvider>
        <CartProvider>
        <Navbar />
        <Routes>
    
       
          <Route path="/" element={<Home/>} />
          <Route path="/Shop" element={<Shop />} />
          <Route path='/Feature' element={<Feature />} />
          <Route path='/Contact' element={<Contact />} />
          <Route path='/bestselling' element={<BestSelling/>}/>
          <Route path='/details' element = {<Details/>}/>
          <Route path='/explore' element = {<Explore/>}/>


        </Routes>
        </CartProvider>
        </AuthProvider>
        <Footer />
      </BrowserRouter>


    </div>

  );
}

export default App;
