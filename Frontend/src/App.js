import { useSelector } from "react-redux";
import './App.css';
import Home from './Pages/Home';
import { Routes, Route, Navigate  } from "react-router-dom";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Cart from "./Pages/Cart";
import { CartProvider } from "react-use-cart";




function App() {
  const user = useSelector((state)=> state.user)


  
  return (
    <div className="App">
 <CartProvider>
<Routes>
 
<Route  path="/" element={user ?<Home/> : <Navigate to='/login' />} />
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login/>} />
        <Route path="/register" element={user ? <Navigate to='/' /> : <Signup/>} />
        <Route path="/cart" element={<Cart/>} />
   </Routes>
   </CartProvider>
      
    </div>
  );
}

export default App;
