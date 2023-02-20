import './contact.css';
import twitter from './assets/twitter.svg';
import instagram from './assets/instagram.svg';
import facebook from './assets/facebook.svg';

const Contact = () => {
    return(
        <>
            <div className='contact-section1'>
                <h1>Contact Us</h1>
                <h2 style={{textAlign:'center', marginTop:'20px'}}>We'd love to hear from you</h2>
                <p style={{textAlign:'center', marginTop:'10px', fontSize:'1.2rem'}}>
                    Have you any question in mind or want to enquire?<br/>
                    Please feel free to contact us through the form or the following platforms
                </p>
                <div className="media-icons" style={{margin:"2% 43% 2% 43%"}}>
                        <a href="#/"><img src={twitter} alt='twitter' /></a>
                        <a href="#/"><img src={instagram} alt='instagram' /></a>
                        <a href="#/"><img src={facebook} alt='facebook' /></a>
                </div>
            

            </div>
            <div className='contact-container'>
                <form action="/" className="decor">
                    <div className="form-left-decoration"></div>
                    <div className="form-right-decoration"></div>
                    <div className="form-inner">
                        <input type="text" placeholder="First Name:" required />
                        <input type="text" placeholder="Last Name:" required />
                        <input type="email" placeholder="Email:" required />
                        <input type="number" placeholder="Phone Number:" required />
                        <textarea placeholder="Your Message..." rows="5" required ></textarea>
                        <button className='contact-button' type="submit" href="/">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Contact;