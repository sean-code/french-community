import './navbar.css';
import { Link } from 'react-router-dom';
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
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/about'>About</Link></li>
              <li><Link to='/team'>Team</Link></li>
              <li><Link to='/services'>Services</Link></li>
              <li><Link to='/blog'>Blog</Link></li>
              <li><Link to='/contact'>Contact</Link></li>
            </ul>
              <h1 class="logo">
                French<span> Community</span>
              </h1>
        </div>
    </nav>
    </>
  );
}

export default NavBar;