import React from 'react';
import './Home.css';
import Product  from './Product';
import {Images} from './Images';

export default function Home(){
  
const [index, setIndex] = useState(0);
  const next = () => {
    setIndex((i) => (i + 1) % Images.length);
  };
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 4000);
    return () => {
      clearInterval(timer);
    };
  }, []); 



  return(
    <div className="home">
     {/*banner */}
   <img className="home_img" src={Images[index]} 
   alt="banner" />
    
    {/*Product*/}
     <div className ="home_raw" >
     <Product
     id={1}
     title="Onepluse mobile"
     price={450}
     rating={5}
     image="https://i.ibb.co/t8bvWj3/download-1.webp"   
     />
     <Product
     id={2}
     title="Amazon Brand - Solimo Wall Sticker for Living Room(Ride through Nature, ideal size on wall: 140 cm x 100 cm),Multicolour"
     price={100}
     rating={4}
     image=" https://i.ibb.co/W3KtVRS/download-5.webp    "   
     />
      </div>
     <div className ="home_raw"> 
     <Product 
     id={3} 
     title="Samsung 198 L 5 Star Inverter Direct-Cool Single Door Refrigerator (RR21T2H2WCB/HL, Camellia Black, Base Stand with Drawer)"
      price={250} 
      rating={3}image="https://i.ibb.co/YkJFSxR/download-3.webp"
     /> 
     <Product 
     id={4} 
     title="Lenovo laptop i5 5th gen"
      price={550}
       rating={4}image="https://i.ibb.co/MZhQZcC/download-2.webp "
     />

     <Product id={5} 
      title="Sony Bravia 164 cm (65 Inches) 4K Ultra HD Smart Android LED TV 65X7400H (Black) (2020 Model) "
      price={200} 
      rating={4}image="https://i.ibb.co/MZDPCrB/download-4.webp  "
     />


 </div>

<div className ="home_raw">
 <Product 
 id={6}
  title="New season style fashion "
   price={80}
    rating={5}
    image=" https://i.ibb.co/DDd98cm/Combined-scroll-SY350-QL85.jpg "
/>
  </div>
<div className ="home_raw">
 <Product 
 id={7}
  title="Playstation DualSense Wireless Controller "
   price={70}
    rating={5}
    image=" https://i.ibb.co/3BfPYs8/41-UK-fp9jc-S.jpg "
/>
<Product 
 id={8}
  title="Sony ZX Series Wired On-Ear Headphones, Black MDR-ZX110 "
   price={50}
    rating={5}
    image=" https://i.ibb.co/QQPfb69/51e-JUp-MRnz-L-AC-UY436-FMwebp-QL65.webp "
/>
<Product 
 id={9}
  title="Nintendo Switch with Gray Joy‑Con - HAC-001(-01) "
   price={560}
    rating={4}
    image=" https://i.ibb.co/37Jf3V3/41-C4-Jk-Snyz-L.jpg "
/>

  </div>



    </div>

  )
}
