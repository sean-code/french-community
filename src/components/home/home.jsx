
// import SimpleSlider from './carousel';
import WhyCard from './cards';
import Slider from './carousel';
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
    </div>
  )
}

export default Home;