import NavBar from './components/navbar/navbar';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/about/about';
import Team from './components/team/team';
import Services from './components/services/services';
import Blog from './components/blog/blog';
import Contact from './components/contact/contact';

function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />}></Route>
        <Route path='/team' element={<Team />}></Route>
        <Route path='/services' element={<Services />}></Route>
        <Route path='/blog' element={<Blog />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;



