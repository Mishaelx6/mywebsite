import React, { useState, useEffect } from 'react';
import './footer.css';
import { Link, animateScroll as scroll } from 'react-scroll';

let date = new Date().getFullYear();

function Footer() {
  const [showScrollButton, setShowScrollButton] = useState(false);

   useEffect(() => {
     // Add an event listener to handle scroll and update the button visibility
     const handleScroll = () => {
       if (window.scrollY > 100) {
         setShowScrollButton(true);
       } else {
         setShowScrollButton(false);
       }
     };

     window.addEventListener('scroll', handleScroll);

     // Clean up the event listener when the component unmounts
     return () => {
       window.removeEventListener('scroll', handleScroll);
     };
   }, []);


     const scrollToTop = () => {
       scroll.scrollToTop({
         duration: 1000, // Adjust the duration as needed for the smooth scroll
         smooth: 'easeInOutQuart', // You can use other easing functions as well
       });
     };

     return (
       <>
         <footer>
           <p>
             copyright &copy; 806 ivention <span id="date"> {date} </span>. All rights reserved
           </p>
         </footer>
         {showScrollButton && (
           <Link
             to="home"
             className="scroll-link top-link"
             spy={true}
             smooth={true}
             duration={1000}
             onClick={scrollToTop}
           >
           <i className="fas fa-arrow-up"></i>
           </Link>
         )}
       </>
     );
   }

   export default Footer;
