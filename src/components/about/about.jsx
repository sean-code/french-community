import './about.css';



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
                    <span>K</span>ifaransa Village was founded in 2020 by Mr. Sammy SIMIYU and co- founders devoted to promote French language , encourage reciprocal communication between all levels of learning it
                    and reuniting the french community
                </p>
                <p>
                    <span>K</span>ifaransa Village was incorporated in 2022 and after establishing operations in Nairobi in partnership with Alliance Française, <br/> it has expanded its operations to the coastal region by adopting a regional strategy under the leadership of Kifaransa Village 
                    Director Pwani, Miss Sharon Otieno, and other executive officers from the coastal region.
                </p>
                <img src='https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fENvbW11bml0eSUyMGFuZCUyMHNvY2lldHklMjBjbHVifGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60' />
            </section>
            <section className='about-2'>
                <h1 style={{textAlign:'center'}}>OUR OBJECTIVES</h1>
            </section>
        </div>
    )
};

export default About;