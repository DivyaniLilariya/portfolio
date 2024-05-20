import { Route, Routes, useLocation } from 'react-router-dom';
import './App.scss';
import Home from './containers/home';
import About from './containers/about';
import Skill from './containers/skill';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import Contact from './containers/contact';
import Navbar from './components/navbar';
import { loadFull } from 'tsparticles';
// import particles from './utils.js/particles';
function App() {
  const location = useLocation()
  const handleInit = async (main)=>{
    await loadFull(main)
  }
  const renderParticlesjsInHomePage = location.pathname === "/"
    return (
    <div className="App">
    {renderParticlesjsInHomePage }
    <Navbar />
    <div className='App__main-page-content'>
    <Routes>
      <Route index path='/' element ={<Home />} />
      <Route path='/about' element ={<About />} />
      <Route path='/skill' element ={<Skill />} />
      <Route path='/resume' element ={<Resume />} />
      <Route path='/portfolio' element ={<Portfolio />} />
      <Route path='/contact' element ={<Contact />} />
     </Routes>
    </div>
    </div>
  );
}

export default App;
