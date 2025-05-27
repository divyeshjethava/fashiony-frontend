import React, {useEffect} from 'react'
import Posster from '../componts/Posters.js'; 
import BestSell from '../componts/BestSell.js';
import OurProduct from '../componts/OurProduct.js';
import ExOffer from '../componts/ExOffer.js';
import Designer from '../componts/Designer.js';


export default function Home() {
   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
  return (
    <div>
      <Posster/>
    <BestSell/>
    <OurProduct/>
    <ExOffer/>
    <Designer/>
    </div>
  )
}
