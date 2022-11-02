import React from "react"

import "./footer.css"

const Footer = () => {
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
        <div className='container padding'>
          <div className='box logo'>
            <h1>Logoipsum</h1>
            
            <p>anonimo tipografo prese una cassetta di caratteri e li assemblò per preparare un testo cam.</p>

          
          </div>
          <div className='box link'>
            <h3>Explore</h3>
            <ul>
              <li>About Us</li>
              <li>Services</li>
              <li>Courses</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='box link'>
            <h3>Quick Links</h3>
            <ul>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Terms & Conditions</li>
              <li>Privacy</li>
              <li>Feedbacks</li>
            </ul>
          </div>
          <div className='box'>
            <h3>Recent Post</h3>
           
              <div className='items flexSB'>
                <div className='img'>
                  <img src="" alt='' />
                </div>
                <div className='text'>
                  <span>
                    <i className='fa fa-calendar-alt'></i>
                    <label htmlFor=''>rth</label>
                  </span>
                  <span>
                    <i className='fa fa-user'></i>
                    <label htmlFor=''>trnj</label>
                  </span>
                  <h4>.</h4>
                </div>
              </div>
          
          </div>
          <div className='box last'>
            
            <ul>
              <li>
                <i className='fa fa-map'></i>
                203 Fake St. Mountain View, San Francisco, California, USA
              </li>
              <li>
                <i className='fa fa-phone-alt'></i>
                +2 392 3929 210
              </li>
              <li>
                <i className='fa fa-paper-plane'></i>
                info@yourdomain.com
              </li>
            </ul>
          </div>
        </div>
      </footer>
    
    </>
  )
}

export default Footer