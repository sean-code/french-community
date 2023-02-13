import './navbar.css';
import image1 from './assets/Kifaransabg.jpg';

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
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Category</a></li>
              <li><a href="#">Menu</a></li>                <li><a href="#">Testimonial</a></li>
              <li><a href="#">Contact</a></li>
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