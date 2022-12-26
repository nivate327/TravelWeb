import React from 'react';
import Navbar from "./Navbar"
import FeaturedCatgories from './FeaturedCatgories';
import Newsletter from './Newsletter';
import Footer from './Footer';
import OurBlog from './OurBlog';

const Catgories = () => {
  return (
    <>
      <div className="catgories">
        <Navbar/>

        <div className="catcenter">
            <h2 className="catHead"> CATEGORY </h2>
        </div>
      </div>

      <FeaturedCatgories/>
      <Newsletter/>
      <Footer/>
    </>
  ) 
}

export default Catgories
