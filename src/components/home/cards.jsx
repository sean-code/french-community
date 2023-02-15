import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './home.css';

function WhyCard() {
  return (
    <div className='why-cards'>
        <CardGroup>
            <Card className='card-components'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8QmxhY2slMjBDb21tdW5pdHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Team Players</Card.Title>
                <Card.Text>
                    We have a team of professional experienced
                    translators and interpreters in diverse fields of specialization, for: French to English, French to Swahili, and Vice Versa..
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card-components'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8TG92ZSUyMHRvJTIwbGVhcm58ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" />
                <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Affordability</Card.Title>
                <Card.Text>
                    We offer the invaluable opportunity to explore the language in real life situations by engaging with French speakers and exploring authentic situations such as presentations, expositions, talents, and music
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card-components'>
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1474403078171-7f199e9d1335?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG1lZXRpbmclMjB1c2luZyUyMGxhcHRvcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" />
                <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Reciprocal Communication</Card.Title>
                <Card.Text>
                We facilitate language learning and teaching
                in different ways as we encourage reciprocal communication between all levels of french in terms of learning and teaching
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
        <CardGroup>
            <Card className='card-components'>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/502641289/photo/hello-hello.jpg?s=612x612&w=0&k=20&c=a6b-fV5WQkx_xUCG-JKUnkHrnf4GDxEepCDKHfW_t7I=" />
                <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Fun and Interactive</Card.Title>
                <Card.Text>
                    We are fun and interactive. Your French lessons focus on interactions, while still following a thorough mode of learning
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card-components'>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/1148799429/photo/learn-francais-word.jpg?s=612x612&w=0&k=20&c=XlBl8ajnZIWUoR0rPSv2FjEwmecxO9-dz98T6djx6_I=" />
                <Card.Body>
                <Card.Title style={{textAlign:'center'}}>French in French</Card.Title>
                <Card.Text>
                    Learn French by speaking French and not English. This will accelerate your learning process
                </Card.Text>
                </Card.Body>
            </Card>
            <Card className='card-components'>
                <Card.Img variant="top" src="https://media.istockphoto.com/id/899192146/photo/group-of-five-peoples-in-silhouettes-at-sunset.jpg?s=612x612&w=0&k=20&c=7s6FTgu2LSxqTlifcnwC2hLr6vQEOxasAoE-XE2bW4g=" />
                <Card.Body>
                <Card.Title style={{textAlign:'center'}}>Passionate Community</Card.Title>
                <Card.Text>
                Join our passionate community and practice your French!
                </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    </div>
  );
}

export default WhyCard;