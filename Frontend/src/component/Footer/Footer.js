import { signOut } from "firebase/auth"
import React from "react"
import { Navigate } from "react-router-dom"
import {auth} from '../../firebase'


import "./footer.css"


const Footer = () => {
 
  const Logout = ()=>{
    
signOut(auth).then(() => {
   <Navigate to='/'/>
}).catch((error) => {
  console.log(error)
});
  }

  return (
    <>
      <section className='newletter'>
        <div className='container flexSB'>
        <i class="fa-sharp fa-solid fa-envelopes-bulk"></i>
          <div className='left row'>
        
            <h1>Sign Up for Newsletter</h1>
            <span>anni ’60, con la diffusione dei fogli di caratteri </span><br></br>
             <span>he contenevano </span>
           
          </div>
          <div className='right '>
         
            <input type='text' placeholder='Enter email address' />
            <button type="button" class="btn btn-secondary btn-sm">Subscribe</button>
          </div>
        </div>
      </section>
      <footer>
        <div className='container padding allink'>
          <div className='box logo'>
            <h4>Logoipsum</h4>
            
            <p>anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo cam.</p>

          
          </div>
          <div className='box link'>
            <h3>Quick links</h3>
            <ul>
              <li>Product</li>
              <li>Classifieds</li>
              
              <li onClick={Logout}>Sign out</li>
              
              <li>Sign Up</li>
              <li >contact</li>
             
            </ul>
          </div>
          <div className='box link'>
            <h3>Customer area</h3>
            <ul>
              <li>My account</li>
              <li>Orders</li>
              <li>Tracking list</li>
              <li>Terms</li>
              <li>Privacy policy</li>
              <li>Return policy</li>
              <li>My cart</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Vendor area</h3>
            <ul>
              <li>Partner with us</li>
              <li>Training</li>
              <li>Procedures</li>
              <li>Terms</li>
              <li>Privacy policy</li>
              
            </ul>
             
          
          </div>
          <div className='box link lst'>
          <h3>Contact</h3>
            <ul>
          <li><p>anonimo tipografo prese una cassetta di caratteri tta tipografo prese una cassetta  </p></li>  
          
            </ul>
            <div className="haq">
              <div className="icz">
              <i class="fa-solid fa-headset"></i>
              </div>
              <div className="number">
               <h6>Have any question ?</h6>
               <p className="text-primary">+1254 215 454</p>
              </div>
              <div className="chat">
              <button type="button" class="btn btn-outline-primary">Chat</button>
              </div>
            </div>
          <div className="lastbtns">
            <div className="btap apple" >

            
            <i class="fa-brands fa-apple"></i>
            
              <div className="inb">
                <p>Download on the</p>
                <span>App store</span>
              </div>

            </div>
            <div className="btap playstore">

            <i class="fa-brands fa-google-play"></i>
            
            <div className="inb">
              <p>GET IT ON</p>
              <span>Play store</span>
            </div>

            </div>
          </div>

          </div>
        </div>
      </footer>
    
    </>
  )
}

export default Footer