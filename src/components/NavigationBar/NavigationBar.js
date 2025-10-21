// import React, { useState, useEffect } from "react";
// import "./NavigationBar.css";
// import { FaArrowDown, FaBars, FaTimes } from "react-icons/fa";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

// const NavigationBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
//       <div className="navbar-container">
//         <button className="menu-icon" onClick={toggleMenu}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         <div className="navbar-left">
//           <ul className={`menu-left ${menuOpen ? "show" : ""}`}>
//             <li>Home</li>
//             <li>About</li>

//             <li className="dropdown">
//               <div className="service_div">
//                 Services{" "}
//                 <FontAwesomeIcon className="faAngleDown" icon={faAngleDown} />
//               </div>
//               <ul className="service_nasted_ul">
//                 <div className="service_nasted_div">
//                   <div>
//                     <li>Software System & Development</li>
//                     <li>App Development</li>
//                     <li>Website Design & Development</li>
//                     <li>Domain & Hosting</li>
//                     <li>BPO Support</li>
//                     <li>Online Marketing</li>
//                   </div>
//                   <div>
//                     <li>Content Development</li>
//                     <li>Graphic Design</li>
//                     <li>UI/UX Design</li>
//                     <li>Social Media Management</li>
//                     <li>Market Research</li>
//                     <li>White Label Solution</li>
//                   </div>
//                 </div>
//               </ul>
//             </li>

//             <li>Contact</li>
//           </ul>
//         </div>

//         <div className="navbar-center">ABAACORP</div>

//         <ul className={`menu-right ${menuOpen ? "show" : ""}`}>
//           <li>Blog</li>
//           <li>Careers</li>
//           <li>Support</li>
//           <li>Login</li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default NavigationBar;

// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import "./NavigationBar.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";

// const NavigationBar = () => {
//   const [menuOpen, setMenuOpen] = useState(false); // ⬅️ menu state

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };
//   return (
//     <div>
//       <nav>
//         <div className="navigation_flex_div">
//           <FontAwesomeIcon
//             className="faBars"
//             icon={faBars}
//             onClick={toggleMenu}
//           />
//           <ul className={`main_menu_ul ${menuOpen ? "side_menu_open" : ""}`}>
//             <li>
//               <Link>Home</Link>
//             </li>
//             <li>
//               <Link>About</Link>
//             </li>
//             <li className="services_li">
//               <div className="services_div">
//                 Services
//                 <FontAwesomeIcon className="faAngleDown" icon={faAngleDown} />
//               </div>
//               {/* Nasted UL START */}
//               <div className="nasted_ul_div">
//                 <ul className="nasted_ul">
//                   <div>
//                     <li>
//                       <Link>Software System & Development</Link>
//                     </li>
//                     <li>
//                       <Link>App Development</Link>
//                     </li>
//                     <li>
//                       <Link>Website Design & Development</Link>
//                     </li>
//                     <li>
//                       <Link>Domain & Hosting</Link>
//                     </li>
//                     <li>
//                       <Link>BPO Support</Link>
//                     </li>
//                     <li>
//                       <Link>Online Marketing</Link>
//                     </li>
//                   </div>
//                   <div>
//                     <li>
//                       <Link>Content Development</Link>
//                     </li>
//                     <li>
//                       <Link>Graphic Design</Link>
//                     </li>
//                     <li>
//                       <Link>UI/UX Design</Link>
//                     </li>
//                     <li>
//                       <Link>Social Media Management</Link>
//                     </li>
//                     <li>
//                       <Link>Market Research</Link>
//                     </li>
//                     <li>
//                       <Link>White Label Solution</Link>
//                     </li>
//                   </div>
//                 </ul>
//               </div>
//               {/* Nasted UL END */}
//             </li>
//             <li>
//               <Link>Contact</Link>
//             </li>
//             <li>
//               <Link>Blog</Link>
//             </li>
//             <li>
//               <Link>Careers</Link>
//             </li>
//             <li>
//               <Link>Support</Link>
//             </li>
//             <li>
//               <Link>Login</Link>
//             </li>
//           </ul>
//           <div className="ABAACORP">ABAACORP</div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default NavigationBar;

import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./NavigationBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faBars } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 750);
  const menuRef = useRef(null);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleServices = () => setServicesOpen(!servicesOpen);

  // ✅ Detect screen resize to switch between mobile / desktop
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 750);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div>
      <nav>
        <div className="navigation_flex_div" ref={menuRef}>
          {/* Hamburger Icon */}
          <FontAwesomeIcon
            className="faBars"
            icon={faBars}
            onClick={toggleMenu}
          />

          {/* Main Menu */}
          <ul className={`main_menu_ul ${menuOpen ? "side_menu_open" : ""}`}>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link
                to="/#about"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("about");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                About
              </Link>
            </li>

            {/* Services Dropdown */}
            <li
              className="services_li"
              onClick={isMobile ? toggleServices : undefined}
            >
              <div className="services_div">
                Services
                <FontAwesomeIcon className="faAngleDown" icon={faAngleDown} />
              </div>

              {/* ✅ Only apply inline style on mobile */}
              <div
                className="nasted_ul_div"
                style={
                  isMobile
                    ? { display: servicesOpen ? "block" : "none" }
                    : undefined
                }
              >
                <ul className="nasted_ul">
                  <div>
                    <li>
                      <Link to="/Software">Software System & Development</Link>
                    </li>
                    <li>
                      <Link to="/AppDevelopment">App Development</Link>
                    </li>
                    <li>
                      <Link to="/Website">Website Design & Development</Link>
                    </li>
                    <li>
                      <Link to="/DomainAndHosting">Domain & Hosting</Link>
                    </li>
                    <li>
                      <Link to="/BPOSupport">BPO Support</Link>
                    </li>
                    <li>
                      <Link to="/OnlineMarketing">Online Marketing</Link>
                    </li>
                  </div>
                  <div>
                    <li>
                      <Link to="/ContentDevelopment">Content Development</Link>
                    </li>
                    <li>
                      <Link to="/GraphicDesign">Graphic Design</Link>
                    </li>
                    <li>
                      <Link to="/UIUXDesign">UI/UX Design</Link>
                    </li>
                    <li>
                      <Link to="/SocialMediaManagement">
                        Social Media Management
                      </Link>
                    </li>
                    <li>
                      <Link to="/MarketResearch">Market Research</Link>
                    </li>
                    <li>
                      <Link to="/WhiteLabelSolution">White Label Solution</Link>
                    </li>
                  </div>
                </ul>
              </div>
            </li>

            <li>
              <Link>Contact</Link>
            </li>
            <li>
              <Link
                to="/#Portfolio"
                onClick={(e) => {
                  e.preventDefault();
                  const section = document.getElementById("Portfolio");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link to="/Blog">Blog</Link>
            </li>
            {/* <li>
              <Link>Careers</Link>
            </li>
            <li>
              <Link>Support</Link>
            </li> */}
            <li>
              <Link>Login</Link>
            </li>
          </ul>

          <div className="ABAACORP">ABAACORP</div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
