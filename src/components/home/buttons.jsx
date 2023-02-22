import { Link } from 'react-router-dom';
import './home.css';

const Buttons = () =>{
    return(
        <div className='view-button'>
            <p>
                <Link to="http://localhost:3000/services" target="_blank">
                    View Our Services ➤ 
                </Link>
            </p>
            <p>
                <Link href="http://localhost:3000/about" target="_blank">
                    View More About Us ➤ 
                </Link>
            </p>
      </div>
    )
};

export default Buttons;