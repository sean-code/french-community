import './footer.css';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import tiktok from './assets/tiktok.svg';
import youtube from './assets/youtube.svg';

const Footer = () =>{
    return(
        <>
            <footer className="footer-distributed">
                <div className="footer-left">
                    <h3>French<span> Community</span></h3>
                <p className="footer-links">
                    <Link to="http://sean-code.github.io/french-community/" className="link-1">Home</Link>
                    <Link to="http://seLinkn-code.github.io/french-community/about">About</Link>
                    <Link to="http://sean-Linkode.github.io/french-community/team">Team</Link>
                    <Link to="http://sean-code.github.io/french-community/services">Services</Link>
                    <Link to="http://sean-code.github.io/french-community/blog">Blog</Link>
                    <Link to="http://sean-code.github.io/french-community/#about">Contact</Link>
                </p>
                <p className="footer-company-name">French Community © 2023</p>
                </div>
                <div className="footer-center">
                <div>
                    <i className="fa fa-map-marker"></i>
                    <p><span>444 S. Cedros Ave</span> Monrovia Street, Nairobi</p>
                </div>
                <div>
                    <i className="fa fa-phone"></i>
                    <p>+254.555.555.5555</p>
                </div>
                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">french@company.com</a></p>
                    </div>

                </div>
                <div className="footer-right">
                    <p className="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
                    <div className="footer-icons">
                        <a href="#/"><img src={twitter} alt='twitter' /></a>
                        <a href="#/"><img src={instagram} alt='instagram' /></a>
                        <a href="#/"><img src={facebook} alt='facebook' /></a>
                        <a href="#/"><img src={tiktok} alt='tiktok' /></a>
                        <a href='#/'><img src={youtube} alt='youtube' /></a>
                    </div>
                </div>
                <p>Developed with 🫶 by <a href='http://github.com/sean-code' style={{textDecoration:'none', color:'white'}}>John Nganga</a></p>
            </footer>
        </>
    )
}

export default Footer;