import './footer.css';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';
import tiktok from './assets/tiktok.svg';
import youtube from './assets/youtube.svg';

const Footer = () =>{
    return(
        <>
            <footer class="footer-distributed">
                <div class="footer-left">
                <h3>Company<span>logo</span></h3>
                <p class="footer-links">
                    <a href="#/" class="link-1">Home</a>
                    <a href="#/">About</a>
                    <a href="#/">Team</a>
                    <a href="#/">Services</a>
                    <a href="#/">Blog</a>
                    <a href="#/">Contact</a>
                </p>
                <p class="footer-company-name">French Community © 2023</p>
                </div>
                <div class="footer-center">
                <div>
                    <i class="fa fa-map-marker"></i>
                    <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                </div>
                <div>
                    <i class="fa fa-phone"></i>
                    <p>+1.555.555.5555</p>
                </div>
                    <div>
                        <i class="fa fa-envelope"></i>
                        <p><a href="mailto:support@company.com">support@company.com</a></p>
                    </div>

                </div>
                <div class="footer-right">
                    <p class="footer-company-about">
                        <span>About the company</span>
                        Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                    </p>
                    <div class="footer-icons">
                        <a href="#/"><img src={twitter} alt='twitter' /></a>
                        <a href="#/"><img src={instagram} alt='instagram' /></a>
                        <a href="#/"><img src={facebook} alt='facebook' /></a>
                        <a href="#/"><img src={tiktok} alt='tiktok' /></a>
                        <a href='#/'><img src={youtube} alt='youtube' /></a>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;