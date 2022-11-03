import { useSelector } from "react-redux";
import './App.css';
import Home from './Pages/Home';
import { Routes, Route, Navigate  } from "react-router-dom";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";




function App() {
  const user = useSelector((state)=> state.user)
  console.log(`the user ${user}`)
  
  return (
    <div className="App">

<Routes>
<Route  path="/" element={user ?<Home/> : <Navigate to='/login' />} />
        <Route path="/login" element={user ? <Navigate to='/' /> : <Login/>} />
        <Route path="/register" element={user ? <Navigate to='/' /> : <Signup/>} />
   </Routes>
      
    </div>
  );
}

export default App;
