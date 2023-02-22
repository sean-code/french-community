
import { Carousel } from 'react-bootstrap';
import './home.css';


const Slider = () => {
    return(
        <div className='carousel-page'>
            <Carousel fade indicators={false} controls={false} pause={false} >
            <Carousel.Item interval={1900}>
                    <img
                    style={{width:'10%', height:'20%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1356385563/photo/people-in-a-meeting-or-group-therapy.jpg?s=612x612&w=0&k=20&c=Pima7ST7FgnPKjE6oRyhlTwb5hO1dnavAb7lQWbjOdc="
                    alt="First slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                    <h1 style={{}}>
                        Welcome</h1>
                    <p>Wilkomen, Bienvenue, Bienvenidos interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1900}>
                    <img
                    style={{width:'10%', height:'20%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbXVuaXR5JTIwc2VydmljZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    alt="First slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                    <h1 style={{}}>
                        Join Us Today For a Better Tomorrow</h1>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1900}>
                    <img
                     style={{width:'10%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1357827625/photo/diverse-group-of-happy-volunteers-walking-together-after-street-clean-up-community-service.jpg?b=1&s=170667a&w=0&k=20&c=1d6XINaI6wGa_o27Y80WIa-bXA63f_GZ9P6Z1FnFZ7Q="
                    alt="Second slide"
                    />

                    <Carousel.Caption className='carousel-caption'>
                    <h1 style={{}}>
                        Experience Reciprocal Communication</h1>
                    <p>This includes all levels of french in terms of learning and teaching</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={1900}>
                    <img
                     style={{width:'10%', filter:'brightness(50%)'}}
                    className="d-block w-100"
                    src="https://media.istockphoto.com/id/1403441234/photo/cheerful-teenagers-putting-their-hands-together-in-unity.jpg?b=1&s=170667a&w=0&k=20&c=0hmgD9uy3JjjdRLJeEx-9v5acz-DKJOAShd4JlDYmGs="
                    alt="Third slide"
                    />
                    <Carousel.Caption className='carousel-caption'>
                        <h1 style={{}}>
                            Our Passionate Brotherhood</h1>
                        <p>We are highly fun and interactive</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )

};

export default Slider;