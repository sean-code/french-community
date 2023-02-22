import './blog.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import { LoremIpsum } from "react-lorem-ipsum";


const Blog = () => {
  return (
    <>
        <div className='blogs-header'>
            <h1><b>Read Our Blogs</b></h1>
        </div>
        <div className='blogs' style={{marginBottom:'40px'}}>
            <CardGroup className='blog-groups'>
                <Card className='blog-cards'>
                    <Card.Img className='blog-images' variant="top" src="https://media.istockphoto.com/id/1412793151/photo/container-truck-along-a-scenic-road-through-the-canadian-rockies.jpg?b=1&s=170667a&w=0&k=20&c=GXKtnOeTmD7Thkbko--jTgjCbJ7Iv2C22imVOREeNGU=" />
                    <Card.Body>
                    <Card.Title style={{textAlign:'center', fontWeight:'600'}}>
                        <LoremIpsum
                            avgWordsPerSentence={2}
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum="false"
                        />
                    </Card.Title>
                    <Card.Text className='card-text'>
                        <LoremIpsum 
                            avgWordsPerSentence={2}
                        />
                    </Card.Text>
                        <div className='blogs-button'>
                            <p>
                                <a href="/#" target="_blank">
                                    Coming Soon ➤ 
                                </a>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='blog-cards'>
                    <Card.Img  className='blog-images' variant="top" src="https://media.istockphoto.com/id/1222023932/photo/traveler-on-the-top-of-a-mountain.jpg?b=1&s=170667a&w=0&k=20&c=e8cCy39A1RNgtDs27_j-_N5D6TeAD3i7vwtikPWmitw=" />
                    <Card.Body>
                    <Card.Title style={{textAlign:'center', fontWeight:'600'}}>
                        <LoremIpsum
                            avgWordsPerSentence={2}
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum="false"
                        />
                    </Card.Title>
                    <Card.Text className='card-text'>
                        <LoremIpsum 
                            avgWordsPerSentence={2}
                        />
                    </Card.Text>
                        <div className='blogs-button'>
                            <p>
                                <a href="/#" target="_blank">
                                    Coming Soon ➤ 
                                </a>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='blog-cards'>
                    <Card.Img  className='blog-images' variant="top" src="https://media.istockphoto.com/id/904559406/photo/whats-that-one-doing.jpg?b=1&s=170667a&w=0&k=20&c=L5So_JmTSDqS-YAuP13LQQEmZ4M_2sqoc39a75pV7js=" />
                    <Card.Body>
                    <Card.Title style={{textAlign:'center', fontWeight:'600'}}>
                        <LoremIpsum
                            avgWordsPerSentence={2}
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum="false"
                        />
                    </Card.Title>
                    <Card.Text className='card-text'>
                        <LoremIpsum 
                            avgWordsPerSentence={2}
                        />
                    </Card.Text>
                        <div className='blogs-button'>
                            <p>
                                <a href="/#" target="_blank">
                                    Coming Soon ➤ 
                                </a>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='blog-cards'>
                    <Card.Img  className='blog-images' variant="top" src="https://media.istockphoto.com/id/1337232523/photo/high-angle-view-of-a-lake-and-forest.jpg?b=1&s=170667a&w=0&k=20&c=MMQAIpDombUQd_8FV9os3jLzza26-oqaOhO3AgUSt9k=" />
                    <Card.Body>
                    <Card.Title style={{textAlign:'center', fontWeight:'600'}}>
                        <LoremIpsum
                            avgWordsPerSentence={2}
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum="false"
                        />
                    </Card.Title>
                    <Card.Text className='card-text'>
                        <LoremIpsum 
                            avgWordsPerSentence={2}
                        />
                    </Card.Text>
                        <div className='blogs-button'>
                            <p>
                                <a href="/#" target="_blank">
                                    Coming Soon ➤ 
                                </a>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
            <CardGroup>
                <Card className='blog-cards'>
                    <Card.Img  className='blog-images' variant="top" src="https://media.istockphoto.com/id/1393907055/photo/sheep-grazing-in-the-field-in-front-of-mont-saint-michel-in-france.jpg?b=1&s=170667a&w=0&k=20&c=ik1kD3Uj7Xg_DKXZCLR6Iqg6iOmmmx25dkL-Jzjb5mE=" />
                    <Card.Body>
                    <Card.Title style={{textAlign:'center', fontWeight:'600'}}>
                        <LoremIpsum
                            avgWordsPerSentence={2}
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum="false"
                        />
                    </Card.Title>
                    <Card.Text className='card-text'>
                        <LoremIpsum 
                            avgWordsPerSentence={2}
                        />
                    </Card.Text>
                        <div className='blogs-button'>
                            <p>
                                <a href="/#" target="_blank">
                                    Coming Soon ➤ 
                                </a>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='blog-cards'>
                    <Card.Img  className='blog-images' variant="top" src="https://media.istockphoto.com/id/690416076/photo/asian-little-girl-and-parent-planting-young-tree-on-black-soil-together.jpg?b=1&s=170667a&w=0&k=20&c=j7zmRaZc7ruTOx4BCEUxM6ziQhyjtpD2zrkRXOn4DuY=" />
                    <Card.Body>
                    <Card.Title style={{textAlign:'center', fontWeight:'600'}}>
                        <LoremIpsum
                            avgWordsPerSentence={2}
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum="false"
                        />
                    </Card.Title>
                    <Card.Text className='card-text'>
                        <LoremIpsum 
                            avgWordsPerSentence={2}
                        />
                    </Card.Text>
                        <div className='blogs-button'>
                            <p>
                                <a href="/#" target="_blank">
                                    Coming Soon ➤ 
                                </a>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='blog-cards'>
                    <Card.Img  className='blog-images' variant="top" src="https://media.istockphoto.com/id/1436430810/photo/paris-eiffel-tower.jpg?b=1&s=170667a&w=0&k=20&c=Qm33k45p4AGKtbNcqkx5hhfP7IRo8RYIpW_VdgE2bDU=" />
                    <Card.Body>
                    <Card.Title style={{textAlign:'center', fontWeight:'600'}}>
                        <LoremIpsum
                            avgWordsPerSentence={2}
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum="false"
                        />
                    </Card.Title>
                    <Card.Text className='card-text'>
                        <LoremIpsum 
                            avgWordsPerSentence={2}
                        />
                    </Card.Text>
                        <div className='blogs-button'>
                            <p>
                                <a href="/#" target="_blank">
                                    Coming Soon ➤ 
                                </a>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
                <Card className='blog-cards'>
                    <Card.Img  className='blog-images' variant="top" src="https://media.istockphoto.com/id/1127582234/photo/waving-french-flags.jpg?b=1&s=170667a&w=0&k=20&c=9dSeBVT3lY76HtbGrGXsjmKtSx8H-LNNIcj3Ohu1zwY=" />
                    <Card.Body>
                    <Card.Title style={{textAlign:'center', fontWeight:'600'}}>
                        <LoremIpsum
                            avgWordsPerSentence={2}
                            avgSentencesPerParagraph={1}
                            startWithLoremIpsum="false"
                        />
                    </Card.Title>
                    <Card.Text className='card-text'>
                        <LoremIpsum 
                            avgWordsPerSentence={2}
                        />
                    </Card.Text>
                        <div className='blogs-button'>
                            <p>
                                <a href="/#" target="_blank">
                                    Coming Soon ➤ 
                                </a>
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </CardGroup>
        </div>
    </>
  );
}

export default Blog;


