import { NavLink } from 'react-bootstrap';
import './navbar.css';
// import image1 from './assets/Kifaransabg.jpg';

function NavBar() {
  return (
    <>
        <nav class="navbar">
          <div class="navbar-container container">
            <input type="checkbox" name="" id="" />
              <div class="hamburger-lines">
                  <span class="line line1"></span>
                  <span class="line line2"></span>
                  <span class="line line3"></span>
          </div>
            <ul class="menu-items">
              <li><NavLink to='/'>Home</NavLink></li>
              <li><NavLink to='/about'>About</NavLink></li>
              <li><NavLink to='/team'>Team</NavLink></li>
              <li><NavLink to='/services'>Services</NavLink></li>
              <li><NavLink to='/blog'>Blog</NavLink></li>
              <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
              <h1 class="logo">
                {/* <img src={image1} alt='img' style={{width:'70px'}}/> */}
                French Community
              </h1>
        </div>
    </nav>
    </>
  );
}

export default NavBar;