import { Link } from 'react-router-dom';
import './home.css';

const Buttons = () =>{
    return(
        <div className='view-button'>
            <p>
                <Link to="https://sean-code.github.io/french-community/#/services" target="_self">
                    View Our Services ➤ 
                </Link>
            </p>
            <p>
                <Link to="https://sean-code.github.io/french-community/#/about" target="_self">
                    View More About Us ➤ 
                </Link>
            </p>
      </div>
    )
};

export default Buttons;