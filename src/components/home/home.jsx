
// import SimpleSlider from './carousel';
import Buttons from './buttons';
import WhyCard from './cards';
import Slider from './carousel';
import Events from './events';
import './home.css';

const Home = () => {
  return(
    <div>
      <section style={{marginBottom:'5%'}}>
        <Slider />
      </section>
      <section className='section-2'>
        <h1>WHY CHOOSE US?</h1>
        <WhyCard />
      </section>
      <section className='section-3' style={{ marginTop:'5%', marginBottom:'20px'}}>
        <Buttons />
      </section>
      <section>
        <Events />
      </section>
    </div>
  )
}

export default Home;