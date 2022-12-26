import React from 'react';
import { useState } from 'react';
import { NavLink } from "react-router-dom";


const Navbar = () => {
    const [fix, setfix]=useState(false);

    const changeBg=()=>
    {
        if(window.scrollY >= 40)
        {
            setfix(true);
        }else{
            setfix(false);
        }
    }

    const toggle=()=>
    {
        setfix(true);
    }

    window.addEventListener("scroll", changeBg);
   
    return (
        <>
            <nav className={fix ? "navbar navbar-expand-lg fixed" : "navbar navbar-expand-lg"}>
                <a class="navbar-brand" href="#">Travel<span class="tra">Easy</span></a>

                <button className="navbar-toggler" onClick={toggle} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i class="fa-solid fa-align-right"></i>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="nav-link">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Catgories" className="nav-link">Catgories</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Contact" className="nav-link">Contact</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/Listing" className="nav-link">Listing</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#service" className="nav-link">Page</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink class="nav-link" to="/addlist"><button class="btn addListing">add Listing</button></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="#signIn" className="nav-link">Sign in or Ragister</NavLink>
                        </li>
                    </ul>

                </div>
            </nav>
        </>
    )
}

export default Navbar
