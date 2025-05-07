// import React, { useState } from "react";
// import "./NavigationBar.css";

// import { FaBars, FaTimes } from "react-icons/fa";

// const NavigationBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   return (
//     <div>
//       <nav className="navbar">
//         <div className="navbar-container">
//           <button className="menu-icon" onClick={toggleMenu}>
//             {menuOpen ? <FaTimes /> : <FaBars />}
//           </button>
//           <div className="navbar-left">
//             <ul className={`menu-left ${menuOpen ? "show" : ""}`}>
//               <li>Home</li>
//               <li>About</li>
//               <li>Services</li>
//               <li>Contact</li>
//             </ul>
//           </div>

//           <div className="navbar-center">Abaacorp</div>

//           <ul className={`menu-right ${menuOpen ? "show" : ""}`}>
//             <li>Blog</li>
//             <li>Careers</li>
//             <li>Support</li>
//             <li>Login</li>
//           </ul>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavigationBar;

import React, { useState, useEffect } from "react";
import "./NavigationBar.css";
import { FaBars, FaTimes } from "react-icons/fa";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          <button className="menu-icon" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className="navbar-left">
            <ul className={`menu-left ${menuOpen ? "show" : ""}`}>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="navbar-center">ABAACORP</div>

          <ul className={`menu-right ${menuOpen ? "show" : ""}`}>
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Login</li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
