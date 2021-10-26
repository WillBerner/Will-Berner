import React, { useState } from 'react'

import Header from "./components/Header.js";
import Portfolio from "./components/pages/Portfolio.js";
import About from "./components/pages/About.js";
import Footer from './components/Footer.js';
import Contact from './components/pages/Contact.js';
import Resume from './components/pages/Resume.js';
import Teaching from './components/pages/Teaching.js';

export default function App() {

  // Use state to keep track of which page to render
  let [page, setPage] = useState("About")

  // Determine which page to display
  let toDisplay;
  switch (page) {
    case "About":
      toDisplay = <About />;
      break;
    case "Portfolio":
      toDisplay = <Portfolio />;
      break;
    case "Teaching":
      toDisplay = <Teaching />;
      break;
    case "Contact":
      toDisplay = <Contact />;
      break;
    case "Resume":
      toDisplay = <Resume />;
      break;
    default:
      toDisplay = <About />;
      break;
  }
  

  return (
    <div>
      <Header setPage={setPage} currentPage={page}/>

      {toDisplay}

      <Footer />
    </div>
  );
}
