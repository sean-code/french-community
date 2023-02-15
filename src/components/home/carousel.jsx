
import { Carousel } from 'react-bootstrap';
import './home.css';


const Slider = () => {
    return(
        <div className='carousel-page'>
            <Carousel fade indicators={false} controls={false} pause={false} >
                <Carousel.Item interval={1000}>
                    <img
                    style={{width:'10%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaXR5JTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h1 style={{textAlign:'left', marginBottom:'20%'}}>
                        Join Us Today<br />For a Better Tomorrow</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                     style={{width:'10%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1357827625/photo/diverse-group-of-happy-volunteers-walking-together-after-street-clean-up-community-service.jpg?b=1&s=170667a&w=0&k=20&c=1d6XINaI6wGa_o27Y80WIa-bXA63f_GZ9P6Z1FnFZ7Q="
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1000}>
                    <img
                     style={{width:'10%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1403441234/photo/cheerful-teenagers-putting-their-hands-together-in-unity.jpg?b=1&s=170667a&w=0&k=20&c=0hmgD9uy3JjjdRLJeEx-9v5acz-DKJOAShd4JlDYmGs="
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

};

export default Slider;