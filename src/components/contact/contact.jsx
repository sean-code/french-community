import './contact.css';

const Contact = () => {
    return(
        <>
            <div className='contact-container'>
                <form action="/" className="decor">
                    <div className="form-left-decoration"></div>
                    <div className="form-right-decoration"></div>
                    <div className="circle"></div>
                    <div className="form-inner">
                        <h1>Contact us</h1>
                        <input type="text" placeholder="First Name" />
                        <input type="text" placeholder="Last Name" />
                        <input type="email" placeholder="Email" />
                        <input type="number" placeholder="Phone Number" />
                        <textarea placeholder="Your Message..." rows="5"></textarea>
                        <button type="submit" href="/">Send</button>
                    </div>
                </form>
            </div>
        </>
    )
};

export default Contact;