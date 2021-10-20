import React, { useState } from 'react'

import Header from "./components/Header.js";
import Portfolio from "./components/Portfolio.js";
import About from "./components/About.js";
import Footer from './components/Footer.js';
import Contact from './components/Contact.js';
import Resume from './components/Resume.js';

export default function App() {

  // Use state to keep track of which page to render
  let [page, setPage] = useState("About")

  // Determine which page to display
  let toDisplay = <About />
  if (page === "About") {
    toDisplay = <About />
  } else if (page === "Portfolio") {
    toDisplay = <Portfolio />
  } else if (page === "Contact") {
    toDisplay = <Contact />
  } else if (page === "Resume") {
    toDisplay = <Resume />
  } else {
    toDisplay = <About />
  }

  return (
    <div>
      <Header setPage={setPage}/>

      {toDisplay}

      <Footer />
    </div>
  );
}
