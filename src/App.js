import React, { useState } from 'react';
import About from './components/About';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Portfolio from "./components/Portfolio";
// import Contact from "./components/Contact";
import Contact from "./components/ContactForm"

import Resume from "./components/Resume";


function App() {

  const [currentPage, handlePageChange] = useState('About Me');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    const page = currentPage;
    switch (page) {
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
      case 'Resume':
        return <Resume />;
      default:
        return <About />;
    }
  }

  return (
    <main>


      <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
      <div>
        {
          // Render the component returned by 'renderPage()'
          renderPage(currentPage)
        }
      </div>
      <Footer></Footer>
    </main>
  );

}

export default App;
