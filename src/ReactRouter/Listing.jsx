import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';



const Listing = () => {

    const listArr=[
        {
            img:"./img/indian.jpg",
            listtitle:"India",
            listtext:`700/D, Kings road, Green lane, 
             85/ India`,
            ph: "9307194158",
            email:"contact@gmail.com"
        },
        {
            img:"./img/jp.jpg",
            listtitle:"Japan",
            listtext:`700/D, Kings road, Green lane, 
             85/ Japan`,
            ph: "9307194158",
            email:"contact@gmail.com"
        },
        {
            img:"./img/sing.jpg",
            listtitle:"Singapore",
            listtext:`700/D, Kings road, Green lane, 
             85/ Singpore`,
            ph: "9307194158",
            email:"contact@gmail.com"
        },
        {
            img:"./img/london.jpg",
            listtitle:"London",
            listtext:`700/D, Kings road, Green lane, 
             85/ London`,
            ph: "9307194158",
            email:"contact@gmail.com"
        },
        {
            img:"./img/usa.jpg",
            listtitle:"United State America",
            listtext:`700/D, Kings road, Green lane, 
             85/ Usa`,
           ph: "9307194158",
            email:"contact@gmail.com"
        },
        {
            img:"./img/russia.jpg",
            listtitle:"Russia",
            listtext:`700/D, Kings road, Green lane, 
             85/ Russia`,
            ph: "9307194158",
            email:"contact@gmail.com"
        },
        
    ]
    
    return (
        <>
            <div className="listing">
                <Navbar />

                <div className="catcenter">
                    <h2 className="catHead"> LISTING </h2>
                </div>
            </div>

            <div className="listingSection py-5">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 col-lg-md-4 col-sm-12 col-12 filtermedia">
                            <h3 className='filter'>Advanced Filter</h3>

                            <div className="card listingCard">
                                <form action="" className='form listingform'>
                                    <div className="form-group">
                                        <input type="text" name="" id="" className='form-control find' placeholder='What are you finding ?' />
                                    </div>

                                    <div className="dropdown">
                                        <a className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                            Choose Catgories
                                        </a>
                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Choose Catgories</a>
                                            <a className="dropdown-item" href="#">Category 1</a>
                                            <a className="dropdown-item" href="#">Category 2</a>
                                            <a className="dropdown-item" href="#">Category 3</a>
                                        </div>
                                    </div>

                                    <div className="dropdown">
                                        <a className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                            Location
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Location</a>
                                            <a className="dropdown-item" href="#">Mumbai</a>
                                            <a className="dropdown-item" href="#">Pune</a>
                                            <a className="dropdown-item" href="#">Bangluru</a>
                                        </div>
                                    </div>

                                    <div className="form-check checkbox-lg">
                                        <input className="form-check-input full" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Full Times
                                        </label>
                                    </div>


                                    <div className="form-check checkbox-lg">
                                        <input className="form-check-input full" type="checkbox" value="" id="defaultCheck1" />
                                        <label className="form-check-label" for="defaultCheck1">
                                            Ratings
                                        </label>
                                    </div>


                                    <div className="dropdown">
                                        <a className="btn dropdown-toggle" type="button" data-toggle="dropdown" aria-expanded="false">
                                            Area (km)
                                        </a>

                                        <div className="dropdown-menu">
                                            <a className="dropdown-item" href="#">Area (km)</a>
                                            <a className="dropdown-item" href="#">Mumbai 15km</a>
                                            <a className="dropdown-item" href="#">Pune 300km</a>
                                            <a className="dropdown-item" href="#">Bangluru 1000km</a>
                                        </div>
                                    </div>

                                    <button className='btn reset'> Reset </button>
                                </form>
                            </div>
                        </div>
                        <div className="col-xl-8 col-lg-8 col-lg-md-8 col-sm-12 col-12">
                            <h3 className='listavi'> 5432 Listings are available </h3>
                            <div className="container">
                                <div className="row">
                                    {
                                        listArr.map((elem, index)=>
                                        {
                                            let {img, listtitle, listtext, ph, email}=elem;

                                            return(
                                                <div className="col-xl-6 col-lg-6 col-sm-6 col-12 filtermedia" key={index}>
                                                <div className="card Cardlist">
                                                    <img src={img} className="card-img-top" alt="..." />
                                                    <button className='btn open'>Open</button>
        
                                                    <div className="card-body listBody">
                                                        <h5 className="card-title listTitle">{listtitle}</h5>
                                                        <p className="card-text listText">{listtext}</p>
                                                        
                                                        <hr />
                                                        <div className="emailPhone">
                                                            <p className="ph">93+ {ph}</p>
                                                            <p className="em">{email}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            )
                                        })
                                    }
                                    
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

export default Listing;
