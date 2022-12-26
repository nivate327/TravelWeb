import React from 'react'
import Navbar from "./Navbar";
import Footer from "./Footer";


const Contact = () => {
  return (
    <>
      <div className="contact">
        <Navbar />

        <div className="catcenter">
          <h2 className="catHead"> CONTACT </h2>
        </div>
      </div>

      <div className="container mapc">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7540.361484596635!2d72.
      86103113651556!3d19.09972523324832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be
      7c8446b5170f9%3A0x9429c1c24c4c7a1f!2sSahar%20Village%2C%20Andheri%20East%2C%20Mumbai%2C%20Maharashtra
      %20400099!5e0!3m2!1sen!2sin!4v1656585253453!5m2!1sen!2sin" width="100%" height="350" style={{ border: 0 }}
          allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

      <div className="contactForm container">
        <h4 className='getintouch'> Get In Touch </h4>
        <div className="row rowab2">
          <div className="col-xl-8 col-lg-8 col-ms-8 col-sm-12 col-12">
            <form action="" className='form contform'>
              <div className="form-group">
                <textarea className="form-control textarea" id="exampleFormControlTextarea1" rows="10" placeholder='Enter Message'></textarea>
              </div>

              <div className="emailandname">
                <div className="form-group">
                  <input type="email" className="form-control mr-2 em" id="exampleFormControlInput1" placeholder="Email" />
                </div>
                <div className="form-group">
                  <input type="text" className="form-control ml-2 na" id="exampleFormControlInput1" placeholder="Name" />
                </div>
              </div>

              <div className="form-group">
                <input type="text" className="form-control subject" id="exampleFormControlInput1" placeholder="Subject" />
              </div>

              <button className='btn submit'> Send </button>
            </form>
          </div>

          <div className="col-xl-4 col-lg-4 col-ms-4 col-sm-12 col-12">
            <div className="bio">
              <div className="add">
              <i class="fa-solid fa-house bioIcon"></i>
                <div>
                  <p className='city'> Mumbai, India</p>
                  <p className='area'>Andheri, sahar village 400099</p>
                </div>
              </div>

              <div className="add">
              <i class="fa-solid fa-mobile bioIcon"></i>
                <div>
                  <p className='city'>91+ 9307194158</p>
                  <p className='area'>Mon to Fri 9am to 6pm</p>
                </div>
              </div>

              <div className="add">
              <i class="fa-regular fa-envelope bioIcon"></i>
                <div>
                  <p className='city'>rohannivate2002@gmail.com</p>
                  <p className='area'>Send us your query anytime !</p>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>

      <Footer/>
    </>
  )
}

export default Contact
