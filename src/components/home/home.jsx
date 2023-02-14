
// import SimpleSlider from './carousel';
import WhyCard from './cards';
import Slider from './carousel';
import './home.css';

const Home = () => {
  return(
    <div>
      <section>
        <Slider />
      </section>
      <section>
        <h2>Why Choose Us</h2>
        <WhyCard />
      </section>
    </div>
  )
}

export default Home;