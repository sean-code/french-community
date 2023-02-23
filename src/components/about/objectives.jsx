import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './objectives.css';

function Objectives() {
  return (
    <Row xs={1} md={2} className="g-2" style={{marginBottom:'20px'}}>
        <Col style={{maxWidth:'95%'}}>
          <Card>
            <Card.Body className='objectives-body'>
              <Card.Title className='objectives-title'>Meet and gather the French family</Card.Title>
              <Card.Text className='objectives-content'>
                A platform where members interact within and among themselves other, 
                network and share French experiences
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className='objectives-body'>
              <Card.Title className='objectives-title'>Engage, share, and highlight talents in French</Card.Title>
                <Card.Text className='objectives-content'>
                    This includes and not limited to music, poetry, storytelling, writing,
                    photography, social media, organizing events et cetera.
                </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col style={{maxWidth:'95%'}}>
          <Card>
            <Card.Body className='objectives-body'>
              <Card.Title className='objectives-title'>Engage the community</Card.Title>
              <Card.Text className='objectives-content'>
              Prove to them that the foreign language is worth
            to invest in terms of money and time because it contributes to our daily lives 
            and also matters to our future
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body className='objectives-body'>
              <Card.Title className='objectives-title'>Facilitate language learning and teaching in different ways and mastery</Card.Title>
              <Card.Text className='objectives-content'>
              This would encourage reciprocal communication between all levels of French 
              in terms of learning and teaching longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
  );
}

export default Objectives;