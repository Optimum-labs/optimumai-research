import { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const Menu = () => {
  return (
    <>
      <p><Link to="/about" onClick={scrollToTop}>About</Link></p>
      <p><Link to="#" onClick={scrollToTop}>AI Research</Link></p>
      <p><Link to="/products" onClick={scrollToTop}>Products</Link></p>
      <p><Link to="#" onClick={scrollToTop}>Case Studies</Link></p>
      <p><Link to="/community" onClick={scrollToTop}>Community</Link></p>
    </>
  )
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);  
  return (
    <div className='optimumai__navbar'>
      <div className="optimumai__navbar-links">
      <div className="optimumai__navbar-links_logo" style={{color: '#fff', fontSize: '1.5rem'}}>
        <Link to="/" onClick={scrollToTop}>OptimumAI</Link>
      </div>
        <div className="optimumai__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="optimumai__navbar-sign">
        <p onClick={scrollToTop}>Sign in</p>
        <button type="button" onClick={scrollToTop}>Sign Up</button>
      </div>
      <div className="optimumai__navbar-menu">
        {toggleMenu
        ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
        : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className="optimumai__navbar-menu_container scale-up-center">
            <div className="optimumai__navbar-menu_container-links">
              <Menu />
              <div className="optimumai__navbar-menu_container-links-sign">
                <p onClick={scrollToTop}>Sign in</p>
                <button type="button" onClick={scrollToTop}>Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;