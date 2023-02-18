import Footer from '../footer/footer';
import './contact.css';

const Contact = () => {
    return(
        <>
            <div className='contact-container'>
                <form action="/" className="decor">
                    <div className="form-left-decoration"></div>
                    <div className="form-right-decoration"></div>
                    <div className="form-inner">
                        <h1>Contact Us</h1>
                        <input type="text" placeholder="First Name:" required />
                        <input type="text" placeholder="Last Name:" required />
                        <input type="email" placeholder="Email:" required />
                        <input type="number" placeholder="Phone Number:" required />
                        <textarea placeholder="Your Message..." rows="5" required ></textarea>
                        <button className='contact-button' type="submit" href="/">Send</button>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
};

export default Contact;