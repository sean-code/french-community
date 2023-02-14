import NavBar from './components/navbar/navbar';
import './App.css';
import Home from './components/home/home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/#' element={<Home />} />
        <Route></Route>
        <Route></Route>
      </Routes>
    </Router>
  );
}

export default App;



{/* <Router>
<NavBar />
<Routes>
  <Route path='/#' element={<Home />} />
  <Route></Route>
  <Route></Route>
</Routes>
</Router> */}