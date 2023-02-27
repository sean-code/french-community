import './about.css';
import Objectives from './objectives';
import { Link } from 'react-router-dom';



const About = () => {
    return(
        <div className="about-container">
            <section className="about-1">
                <h1>ABOUT US?</h1>
            </section>
            <section className='about-cards'>
                <img src='https://images.unsplash.com/photo-1529209076408-5a115ec9f1c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fENvbW11bml0eSUyMGFuZCUyMHNvY2lldHklMjBjbHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60' />
                <p>
                    <h2>We are a nonprofit community in Kenya</h2>
                    <span>F</span>rench Community was founded in 2020 by Mike McLusky and co- founders devoted to promote French language , encourage reciprocal communication between all levels of learning it
                    and reuniting the french community
                </p>
                <p>
                    <span>F</span>rench was incorporated in 2022 and after establishing operations in Nairobi in partnership with Alliance Française, <br/> it has expanded its operations to the coastal region by adopting a regional strategy under the leadership of French 
                    Director Tobi Bamtefa, and other executive officers from the coastal region.
                </p>
                <img src='https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fENvbW11bml0eSUyMGFuZCUyMHNvY2lldHklMjBjbHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60' />
            </section>
            <section className='about-2'>
                <h1 style={{textAlign:'center', fontWeight:'800'}}>OUR OBJECTIVES</h1>
                <Objectives />
            </section>
            <section>
            <div className='view-button' style={{marginTop:'90px', marginBottom:'40px'}}>
                <p>
                    <Link to="http://localhost:3000/services" target="_blank">
                        View Our Services ➤ 
                    </Link>
                </p>
            </div>
            </section>
        </div>
    )
};

export default About;