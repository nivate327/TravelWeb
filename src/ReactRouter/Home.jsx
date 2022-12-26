import React from 'react';
//import { Outlet } from "react-router-dom";
import Navbar from './Navbar';
import { PlaceArr } from './PlaceArr';
import Howwork from './Howwork';
import FeaturedCatgories from './FeaturedCatgories';
import Newsletter from './Newsletter';
import OurBlog from './OurBlog';
import Footer from './Footer';
import Slider from './Slider';


const Home = () => {
  return (
    <>
      <div class="TravelHome">

        <Navbar />

        <div class="hero">
          <div class="container">
            <div class="row">
              <div class="col-12 col-xl-12 col-lg-12 heroTravel">
                <p class="explore">Explore the city</p>
                <h3 class="world">Discover Great Places</h3>
                <div class="inputandbtn">
                  <input type="text" name="" id="" className='searchText' placeholder='What are you looking for?' />
                  <button class="btn searchBtn"> Search </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="popularPlace">
        <p className="most">Most visited places</p>
        <h3 className='locations'>Popular Locations</h3>

        <div className="container allPlaces">
          <div className="row">
            {PlaceArr.map((val) => {
              return (
                <>
                  <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6 col-12 placecrd">
                    <div className="place">
                      <img src={val.img} alt="Card image cap " className='img-fluid placeImg' />

                      <div className="data">
                        <h3 className="placename">{val.nameOfplace}</h3>
                        <button className="btn btn-info location">{val.location}+ Location</button>
                       </div>
                    </div>
                  </div>
                </>
              )
            })}
          </div>
        </div>

        <button className='btn viewAll'>VIEW ALL PLACES</button>
      </div>

      <Howwork/>

      <FeaturedCatgories/>

      
      <OurBlog/>
      
      <Newsletter/>

      <Slider/>

      <Footer/>

     
    </>
  )
}

export default Home
