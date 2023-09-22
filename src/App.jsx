import React, { useState, useEffect } from 'react';
import logo from './assets/my logo.png';
import About from './about';
import Project from './projects';
import Footer from './footer';
import Resume from './resume';
import { Link, Element } from 'react-scroll';

function App() {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      // Close the navigation bar when scrolling starts
      if (isNavbarOpen) {
        setIsNavbarOpen(false);
      }
    };

    // Add the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isNavbarOpen]);

  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} className="logo" alt="logo" />
            <button
              type="button"
              name="button"
              className="nav-toggle"
              onClick={toggleNavbar}
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <ul className={`links ${isNavbarOpen ? 'show-links' : ''}`}>
            <li>
              <Link
                to="section1"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset as needed
                duration={500}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="section2"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset as needed
                duration={500}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="section3"
                spy={true}
                smooth={true}
                offset={-70} // Adjust this offset as needed
                duration={500}
              >
                Projects
              </Link>
            </li>
            <li>Contact</li>
          </ul>
        </div>
      </nav>
    <Element name="section1">
    <section className="header">
      <div className="section-center">
        <h1> Mishael Johnson</h1>
        <p>I am Front End Developer And Graphic designer. Lets work together</p>

        <Resume/>



      </div>
    </section>
    </Element>
    <Element name="section2">
    <section className="about-container" id="about">
     <div  className = "row">
    <div className = "about-col-1">
   <img src="" alt="about" />
     </div>

     <About/>

   </div>
 </section>
 </Element>
 <Element name="section3">
 <Project/>
 </Element>

 <Footer/>

 </>
  )

}

export default App;
