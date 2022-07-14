import React from 'react'
import Product from './Product';

 function Md({productItems, handleAddProduct}) {
   
  return (
  
       <div className='right-section'>
          <Product  productItems={productItems} handleAddProduct={handleAddProduct}/>
       </div>

  )
}

export default Md;