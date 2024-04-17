import { useState } from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
// import logo from '../../assets/logo.svg';
import {Link} from 'react-router-dom';

const Menu = () => {
  return (
    <>
      <p><Link to="#">Home</Link></p>
      <p><Link to="#">AI Research</Link></p>
      <p><Link to="#">Products</Link></p>
      <p><Link to="#">Case Studies</Link></p>
      <p><Link to="#">Community</Link></p>
    </>
  )
};

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='optimumai__navbar'>
      <div className="optimumai__navbar-links">
      <div className="optimumai__navbar-links_logo" style={{color: '#fff', fontSize: '1.5rem'}}>
        <Link to="#">OptimumAI</Link>
      </div>
        <div className="optimumai__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="optimumai__navbar-sign">
        <p>Sign in</p>
        <button type="button">Sign Up</button>
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
                <p>Sign in</p>
                <button type="button">Sign Up</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar;