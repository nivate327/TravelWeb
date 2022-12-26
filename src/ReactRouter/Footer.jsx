import React from 'react'
import { NavLink } from "react-router-dom";
import playstore from "./playstore.png";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="row footerRow">
                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <h3 className="logo">Travel<span class="tra">Easy</span></h3>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p className="quicklink">Quick Link</p>
                            <ul className='footerlist'>
                                <li><NavLink to="/" className="nav-link"> Home </NavLink></li>
                                <li><NavLink to="#about" className="nav-link"> About </NavLink></li>
                                <li><NavLink to="#contact" className="nav-link"> Contact </NavLink></li>
                                <li><NavLink to="#listing" className="nav-link"> Listing </NavLink></li>
                            </ul>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p className="quicklink">Categories</p>
                            <ul className='footerlist'>
                                <li><NavLink to="/" className="nav-link"> Reasonable Hotel </NavLink></li>
                                <li><NavLink to="#about" className="nav-link"> Popular Restaurant </NavLink></li>
                                <li><NavLink to="#contact" className="nav-link"> Easy Shopping </NavLink></li>
                                <li><NavLink to="#listing" className="nav-link"> Night Life </NavLink></li>
                            </ul>
                        </div>

                        <div className="col-xl-3 col-lg-3 col-md-3 col-sm-12 col-12">
                            <p className="quicklink">Download On</p>

                            <div className="download">
                                <i class="fa-brands fa-google-play downloadIcon mr-3"></i>
                                <i class="fa-brands fa-apple downloadIcon"></i>
                            </div>
                        </div>

                    </div>

                    <div className='hr'></div>
                    
                    <div className="footerlast">
                        <p className='footerheadLine'>Copyright ©2022 All rights reserved | This template is made with ❤️ by Rohan </p>
                    
                        <div className="socialIcon">
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-github"></i>
                        <i class="fa-brands fa-instagram"></i>
                        </div>
                    </div>
                  
                </div>

                
            </div>
            
          
        </>
    )
}

export default Footer
