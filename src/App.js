import logo from './logo.svg';
import './App.css';
import './Responsive.css';

import {
  Route,
  Routes,
} from "react-router-dom";

import MainHeader from './MainHeader';
import Home from "./ReactRouter/Home";
import About from "./ReactRouter/About";
import Contact from "./ReactRouter/Contact";
import Catgories from "./ReactRouter/Catgories";
import Listing from "./ReactRouter/Listing";
import Page from "./ReactRouter/Page";
import Addlisting from './ReactRouter/Addlisting';
import Gototop from './ReactRouter/Gototop';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainHeader />}>
          <Route index element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Catgories" element={<Catgories />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/addlist" element={<Addlisting />} />
        </Route>
      </Routes>

      <Gototop/>
      </>
      );
}

      export default App;
