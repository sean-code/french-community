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
              <li><a href='/'>Home</a></li>
              <li><a href='/about'>About</a></li>
              <li><a href='/team'>Team</a></li>
              <li><a href='/services'>Services</a></li>
              <li><a href='/blog'>Blog</a></li>
              <li><a href='/contact'>Contact</a></li>
            </ul>
              <h1 class="logo">
                French Community
              </h1>
        </div>
    </nav>
    </>
  );
}

export default NavBar;