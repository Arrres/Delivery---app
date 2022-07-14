import React, { useState }  from 'react'
import "./Cart.css";
import  BBQ  from './img/BBQ.png';




function Cart({cartItems, handleAddProduct, handleRemoveProduct}) {

  const totalPrice = cartItems.reduce(
    (price, item) => price + item.quantity * item.price, 0
);
    const [Name, setName] = useState('');
    const [Email, setEmail] = useState('');
    const [Phone, setPhone] = useState('');
    const [Address, setAddress] = useState('');

    const onNameChange = e => setName(e.target.value);
    const onEmailChange = e => setEmail(e.target.value);
    const onPhoneChange = e => setPhone(e.target.value);
    const onAddressChange = e => setAddress(e.target.value);

    const handleSubmit = (e) => {
      e.preventDefault();

      const data = {Name, Email, Phone, Address, totalPrice, cartItems };
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      };
      fetch("#", requestOptions)
      .then(response => response.json())
      
    };



   return (
    <>
      
      <section className="shopping-cart">
        <div className="section-input">
            <div className="input-form">
            <form onSubmit={handleSubmit}> 
            <label>
              <p className="input-text">Name:</p>
              <input 
              type="text" 
              name="name" 
              className="input-row"
              onChange={onNameChange} value={Name}  />
              <br />
            </label>
            <label>
              <p className="input-text">Email:</p>
              <input type="text" name="email" className="input-row"
               onChange={onEmailChange} value={Email}  />
              <br />
            </label>
            <label>
              <p className="input-text">Phone:</p>
              <input type="text" name="phone" className="input-row" 
              onChange={onPhoneChange} value={Phone} />
              <br />
            </label>
            <label>
              <p className="input-text">Address:</p>
              <input type="text" name="address" className="input-row" 
              onChange={onAddressChange} value={Address} />
              <br />
            </label>

            <div className="footer-cart">
              <p className="total-price">Total price: {totalPrice} $</p>
              <input className="submit-btn" type="submit" value="Submit" />
            </div>

            </form>
            </div>
        </div>

        <div className="section-cart">
          
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                      <img src={BBQ} alt="Big Big Burger" className="img-cart" />
                    <div className="text-cart">
                      <h3 className="title-cart">{item.title}</h3>
                      <p className="price">Price: {item.price} $</p>
                      <div className="quantity-cart">
                      <button className='quantity-btn minus' 
                        onClick={() => handleRemoveProduct(item)}> - </button>
                        <div id={item.id}><p className='quantity-numb'>{item.quantity}</p></div> 
                        <button  className='quantity-btn plus'
                        onClick={() => handleAddProduct(item)}> + </button>
                      </div>
                    </div>
                </div>
              ))}
          
        </div>
      </section>

  
      
    </>
  );
}

export default Cart;
