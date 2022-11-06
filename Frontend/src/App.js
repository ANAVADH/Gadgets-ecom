
import './App.css';
import Home from './Pages/Home';
import { Routes, Route , Navigate } from "react-router-dom";
import Login from "./Pages/Login";

import Cart from "./Pages/Cart";
import { CartProvider } from "react-use-cart";
import { useAuth0 } from '@auth0/auth0-react';







function App() {

  const { isAuthenticated } = useAuth0();
  console.log(isAuthenticated)

  
  return (
    <div className="App">
       
 <CartProvider>
<Routes>
 
<Route  path="/" element={ <Home/>} />
        <Route path="/login" element={ <Login/>} />
       
        <Route path="/cart" element={ isAuthenticated ? <Cart/> : <Navigate to='/login'/>} />
   </Routes>
   </CartProvider>
 
      
    </div>
  );
}

export default App;
