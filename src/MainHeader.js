import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./ReactRouter/Navbar";

const MainHeader = () => {
    return (
        <>
           
           <Outlet/>
           
        </>
    );
}

export default MainHeader;