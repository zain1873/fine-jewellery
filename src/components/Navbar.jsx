// import React, { useState, useEffect } from 'react';
// import "../styles/navbar.css"

// const Navbar = () => {
//   const [activeItem, setActiveItem] = useState('FINE JEWELRY');
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isScrolled, setIsScrolled] = useState(false);

//   const navigationItems = [
//     'FINE JEWELRY',
//     'Rings',
//     'Bracelets', 
//     'Earrings',
//     'Necklaces',
//     'Brooches',
//     'All Fine Jewelry',
//     'CHANEL TRY ON',
//     'Engagement Rings',
//     'Wedding Rings'
//   ];

//   const handleItemClick = (item) => {
//     setActiveItem(item);
//     setIsMenuOpen(false);
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   // Prevent body scroll when menu is open
//   useEffect(() => {
//     if (isMenuOpen) {
//       document.body.style.overflow = 'hidden';
//     } else {
//       document.body.style.overflow = 'unset';
//     }
//     return () => {
//       document.body.style.overflow = 'unset';
//     };
//   }, [isMenuOpen]);

//   return (
//     <div className="chanel-navbar-container">

//       {/* Mobile Overlay */}
//       <div 
//         className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`}
//         onClick={() => setIsMenuOpen(false)}
//       ></div>

//       {/* Main Navbar */}
//       <nav className="chanel-navbar">
//         <div className="navbar-container">
//           {/* Fixed Top Section */}
//           <div className={`navbar-top ${isScrolled ? 'scrolled' : ''}`}>
//             {/* Mobile Toggle */}
//             <button
//               className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
//               onClick={toggleMenu}
//               aria-label="Toggle navigation"
//             >
//               {isMenuOpen ? '✕' : '☰'}
//             </button>

//             {/* Brand Logo */}
//             <a href="#" className="navbar-brand">
//               CHANEL
//             </a>

//             {/* Right Icons */}
//                <div className="navbar-icons">
//         <a href="#" className="icon-link" title="Search">
//           <i className="bi bi-search"></i>
//         </a>
//         <a href="#" className="icon-link" title="Account">
//           <i className="bi bi-person"></i>
//         </a>
//         <a href="#" className="icon-link" title="Wishlist">
//           <i className="bi bi-star"></i>
//         </a>
//         <a href="#" className="icon-link" title="Shopping Bag">
//           <i className="bi bi-bag"></i>
//         </a>
//       </div>
//           </div>

//           {/* Desktop Sticky Navigation Menu */}
//           <div className="navbar-sticky-menu">
//             <ul className="navbar-menu">
//               {navigationItems.map((item) => (
//                 <li key={item} className="nav-item">
//                   <a
//                     href="#"
//                     className={`nav-link ${activeItem === item ? 'active' : ''}`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleItemClick(item);
//                     }}
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Mobile Slide Menu */}
//           <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
//             <div className="mobile-menu-header">
//               <div className="mobile-menu-logo">CHANEL</div>
//               <button 
//                 className="mobile-close"
//                 onClick={() => setIsMenuOpen(false)}
//                 aria-label="Close menu"
//               >
//                 ✕
//               </button>
//             </div>
            
//             <div className="mobile-nav-content">
//               {navigationItems.map((item) => (
//                 <div key={item} className="mobile-nav-item">
//                   <a
//                     href="#"
//                     className={`mobile-nav-link ${activeItem === item ? 'active' : ''}`}
//                     onClick={(e) => {
//                       e.preventDefault();
//                       handleItemClick(item);
//                     }}
//                   >
//                     {item}
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import "../styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { label: 'FINE JEWELRY', path: '/' },
    { label: 'Rings', path: '/rings' },
    { label: 'Bracelets', path: '/bracelets' },
    { label: 'Earrings', path: '/earrings' },
    { label: 'Necklaces', path: '/necklaces' },
    { label: 'Brooches', path: '/brooches' },
    { label: 'All Fine Jewelry', path: '/all-jewelry' },
    { label: 'CHANEL TRY ON', path: '/tryon' },
    { label: 'Engagement Rings', path: '/engagement' },
    { label: 'Wedding Rings', path: '/wedding' },
  ];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="chanel-navbar-container">
      <div 
        className={`mobile-overlay ${isMenuOpen ? 'open' : ''}`} 
        onClick={() => setIsMenuOpen(false)}
      ></div>

      <nav className="chanel-navbar">
        <div className="navbar-container">
          <div className={`navbar-top ${isScrolled ? 'scrolled' : ''}`}>
            <button
              className={`mobile-toggle ${isMenuOpen ? 'active' : ''}`}
              onClick={toggleMenu}
              aria-label="Toggle navigation"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>

            <Link to="/" className="navbar-brand">CHANEL</Link>

            <div className="navbar-icons">
              <a href="#" className="icon-link"><i className="bi bi-search"></i></a>
              <a href="#" className="icon-link"><i className="bi bi-person"></i></a>
              <a href="#" className="icon-link"><i className="bi bi-star"></i></a>
              <a href="#" className="icon-link"><i className="bi bi-bag"></i></a>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-sticky-menu">
            <ul className="navbar-menu">
              {navigationItems.map(({ label, path }) => (
                <li key={label} className="nav-item">
                  <Link
                    to={path}
                    className={`nav-link ${location.pathname === path ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Navigation */}
          <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
            <div className="mobile-menu-header">
              <div className="mobile-menu-logo">CHANEL</div>
              <button 
                className="mobile-close"
                onClick={() => setIsMenuOpen(false)}
              >
                ✕
              </button>
            </div>

            <div className="mobile-nav-content">
              {navigationItems.map(({ label, path }) => (
                <div key={label} className="mobile-nav-item">
                  <Link
                    to={path}
                    className={`mobile-nav-link ${location.pathname === path ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
