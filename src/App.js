import logo from './logo.svg';
import './App.css';
import Practice from './Practice';
import Mycomponent from './Mycomponent';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product])
  }
  return (
    <div className="App">
    <h1>Hello ReactApp</h1>
    <Practice/>
    <Mycomponent/>
    <Navbar cartCount={cart.length}/>
    <ProductList addToCart={addToCart}/>
    <Cart cart ={cart}/>
    {/* <Practice/> */}
    </div>
  );
}

export default App;
