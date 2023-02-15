
// import SimpleSlider from './carousel';
import Footer from '../footer/footer';
import Buttons from './buttons';
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
      <section className='section-3'>
        <Buttons />
      </section>
      <section className='section-4' style={{marginTop:'10%'}}>
        <Footer />
      </section>
    </div>
  )
}

export default Home;