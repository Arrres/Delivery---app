import React, { useState } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import Main from "./Main";
import Cart from "./Cart";
import Md from "./Md";
import Cfk from "./Cfk";
import data from "./data";
import "./App.css";

function App() {
  const { productItems } = data;

  const [cartItems, setCartItems] = useState([]);

  const handleAddProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handleRemoveProduct = (product) => {
    const ProductExist = cartItems.find((item) => item.id === product.id);
    if (ProductExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...ProductExist, quantity: ProductExist.quantity - 1 }
            : item
        )
      );
    }
  };
  return (
    <header className="App-header">
      <nav>
        <ul className="header-list">
          <li className="header-item">
            <NavLink className="header-link" to="Main">
              Shop
            </NavLink>
          </li>
          <li className="vr"></li>
          <li className="header-item">
            <NavLink className="header-link" to="Cart">
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="main/*" element={<Main />}>
          <Route
            path="Md"
            element={
              <Md
                productItems={productItems}
                handleAddProduct={handleAddProduct}
              />
            }
          />
          <Route path="Cfk" element={<Cfk />} />
        </Route>
        <Route
          path="cart"
          element={
            <Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct}/>
          }
          
        />
      </Routes>
    </header>
  );
}

export default App;
