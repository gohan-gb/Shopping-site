import React from 'react'
import '../styles/productCard.css';

const productCard = ({title, price, imgUrl}) => {
  return (
    <div class= 'mainDiv'>
        <div class='productCard'>
          <img 
          src={imgUrl} 
          alt="sketchbook" />
          <section class='product-details'>
            <section>
              <h1>{title} </h1>
              <p>Price: {price} /-</p>
            </section>
            <button class='addProduct'>Add To Cart</button>
          </section>
        </div>

    </div>
  )
}



export default productCard