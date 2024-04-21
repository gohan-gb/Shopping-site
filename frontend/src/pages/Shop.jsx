import React, { useEffect, useState } from 'react';
import '../styles/shop.css';
import ProductCard from '../components/ProductCard';
import axios from "axios";

const fetchProducts = async () => {
  const res = await axios.get("http://localhost:3000/products");
  const data = res.data;
  console.log(data);
  return (data);
}

const Shop = () => {
  const [data, setData] = useState([]);

  const assignData = async () => {

  const fetchData = await fetchProducts();

  setData(fetchData);
  }

  useEffect(()=> {
    assignData();
  }, []);

  return (
    <div>
    
        <section class='image'>
          <section class='gradient'>

          
          <h1>we know you want to sketch asap! <br /> we got you <br /> delivery within hours</h1>
          </section>
        </section>
    

      <section class='products'>

        <div className='flex justify-between'>
            {data.map((product) => {
              return (
                <ProductCard 
                key={product._id}
                title={product.title}
                price={product.price}
                imgUrl={product.imgUrl}
                />
                );
              })}
        </div>


      </section>
    </div>
  )
}

export default Shop