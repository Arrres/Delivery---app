import React from 'react';
import  BBQ  from './img/BBQ.png';

function Product({productItems, handleAddProduct}) {
  
  return (
    <>
      { productItems.map((productItem) =>( 
      <div key={productItem.id}  className='card'>
      <img src={BBQ} 
      alt="Burger" 
      className='img-card'/>
      <h3 className='title-card'>{productItem.title}</h3>
      <button 
          type="button" 
          className='btn-card'
          onClick={() => handleAddProduct(productItem)} 
          >add to Cart</button>
  </div>
    ))
    }
    </>
  

  )
}

export default Product;