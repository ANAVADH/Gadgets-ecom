import {auth} from './firebase'
import './App.css';
import Home from './Pages/Home';
import { Routes, Route, Navigate , } from "react-router-dom";
import Login from "./Pages/Login";

import Cart from "./Pages/Cart";
import { CartProvider } from "react-use-cart";
import {useAuthState} from 'react-firebase-hooks/auth';


function App() {
  const [user] = useAuthState(auth);
 
  
  return (
    <div className="App">
       
 <CartProvider>
<Routes>
 
<Route  path="/" element={user ? <Home/> : <Navigate to='/login'/>} />
        <Route path="/login" element={user? <Navigate to='/'/>: <Login/>} />
       
        <Route path="/cart" element={user ?  <Cart/> : <Navigate to='/login'/> }/>
   </Routes>
   </CartProvider>
 
      
    </div>
  );
}

export default App;
