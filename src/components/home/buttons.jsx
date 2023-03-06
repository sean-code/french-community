import { Link } from 'react-router-dom';
import './home.css';

const Buttons = () =>{
    return(
        <div className='view-button'>
            <p>
                <Link to="/services" target="_self">
                    View Our Services ➤ 
                </Link>
            </p>
            <p>
                <Link to="/about" target="_self">
                    View More About Us ➤ 
                </Link>
            </p>
      </div>
    )
};

export default Buttons;