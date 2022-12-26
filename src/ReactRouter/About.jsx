import React from 'react'
import Footer from './Footer';
import Howwork from './Howwork';
import Navbar from './Navbar';
import Slider from './Slider';

const About = () => {
  return (
    <>

      <div className="about">
        <Navbar />

        <div className="aboutText">
          <h3 className="aboutus"> About Us </h3>
        </div>
      </div>

      <div className="aboutPart container">
        <div className='aboutHead'>
          <p className="explore">About our company</p>
          <h4 className="works">Making sure that our products exceed expectations for <br /> quality, style and performance.</h4>

        </div>

        <div className="row rowab">
          <div className="col-xl-6 col-lg-6 col-sm-6 col-12 aboutRow">
            <h4 className="aboutDescri">Our Mission</h4>
            <p className="descText">
              Brook presents your services with flexible nienti <br /> and multipurpose layouts.
              You can select vorite <br /> layouts & elements
              for particular projects with <br /> unlimited mizationi possibilities.
            </p>
          </div>

          <div className="col-xl-6 col-lg-6 col-sm-6 col-12 aboutRow">
            <h4 className="aboutDescri">Plan Overview</h4>
            <p className="descText">
              Brook presents your services with flexible nienti <br /> and multipurpose layouts.
              You can select vorite <br /> layouts & elements
              for particular projects with <br /> unlimited mizationi possibilities.
            </p>
          </div>
        </div>
      </div>

        <Howwork/>
      <Slider/>
      <Footer/>


    </>
  )
}

export default About
