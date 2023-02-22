import './services.css';
import { Link } from 'react-router-dom';

const Services = () => {
    return(
        <>
            <section className='services-1'>
                <h1>OUR SERVICES</h1>
            </section>
            <section className='service-cards'>
                <img src='https://media.istockphoto.com/id/1169984447/photo/do-you-speak-french-written-on-board-france-flag-standing-in-box-language.jpg?b=1&s=170667a&w=0&k=20&c=6pDDElK2baw4JLXFD86NaFagBRVdWUBd4zmYoS6qkFs=' />
                <p>
                    <h2>Translation Services</h2>
                    We offer French Translation Services in the following language pairs: French to English Translation Services English to French, Translation Services French to Swahili translation Services, 
                    and Swahili to French translation Services
                
                    <div className='services-button'>
                        <Link to="/#" target="_blank">
                            Book Us ➤
                        </Link>
                    </div>
                </p>

                <img src='https://media.istockphoto.com/id/1273171528/photo/portrait-of-beautiful-woman-volunteer-outdoors.jpg?b=1&s=170667a&w=0&k=20&c=wAvBzQCZik74WteOC1wpuZJ7h5BUEQN46dP62K8E9gY=' />
                <p>
                    <h2>Team Building and Events Management</h2>
                    We facilitate team building workshops to create positive relationships and synergy within french teaching schools, organizations/institutions. 
                    This makes sure you are motivated and promotes growth and attitude change. Our approach is mainly based on experiental learning and real life 
                    case studies of the French Language 
                    and Swahili to French translation Services
                    <div className='services-button'>
                        <Link to="/#" target="_blank">
                            Book Us ➤
                        </Link>
                    </div>
                </p>

                <img src='https://media.istockphoto.com/id/1018482510/photo/girl-and-teacher-using-laptop-at-table.jpg?b=1&s=170667a&w=0&k=20&c=1xLDUfwR6wO0iKWpnQWsWtH50XIWxrShGCu91-TU5Gw=' />
                <p>
                    <h2>French Tutoring (Remote and Physical)</h2>
                    We have compassionate and dedicated french teachers ready to deliver fully and quality knowledge to any of our students. They all possess well-versed computer literacy hence making online learning seamless. 
                    We use a variety of teaching methods to help our students master the content.
                    <div className='services-button'>
                        <Link to="/#" target="_blank">
                            Book Us ➤
                        </Link>
                    </div>
                </p>

                <img src='https://media.istockphoto.com/id/1346929901/photo/group-of-customer-service-representatives-working-at-a-call-center.jpg?b=1&s=170667a&w=0&k=20&c=YYOC1YBE3wCW8keNXgOPKg_2I0tnIKo3q4c-4p_8jHc=' />
                <p>
                    <h2>Customized Call Center Outsourcing Services</h2>
                    We offer Customer Care Services in French Organizations, 
                    a first point of contact for calls from our English speaking customers and the primary point of contact for French speaking customers.
                    <div className='services-button'>
                        <Link to="/#" target="_blank">
                            Book Us ➤
                        </Link>
                    </div>
                </p>

                <img src='https://media.istockphoto.com/id/803172342/photo/young-kids-in-a-school-playground-with-teacher-holding-ball.jpg?b=1&s=170667a&w=0&k=20&c=HbCCvhEphCOh3K-XqfqHNfsclHeo9kh61J1-5XH2mHs=' />
                <p>
                    <h2>Mentorship Programme</h2>
                    Our Mentorship Development Program focuses on self and team development. 
                    The program can be customized to suit your company/institution/individual needs in line with your stated objectives.
                    <div className='services-button'>
                        <Link to="/#" target="_blank">
                            Book Us ➤
                        </Link>
                    </div>
                </p>

                <img src='https://media.istockphoto.com/id/484794664/photo/teacher-reading-a-book-with-a-class-of-preschool-children.jpg?b=1&s=170667a&w=0&k=20&c=7V2FKYQjGvKo-UBwy8PuPbP93OIxaHlad4HhzpRdcH4=' />
                <p>
                    <h2>Coaching and Mentoring</h2>
                    We offer a range of coaching and mentoring programs for your aimed at candidates, 
                    French career opportunities, French community networking et cetera.
                    <div className='services-button'>
                        <Link to="/#" target="_blank">
                            Book Us ➤
                        </Link>
                    </div>
                </p>
            </section>
        </>
    )
};

export default Services;