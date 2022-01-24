import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';
import AboutPage from './pages/AboutPage';
import './App.css';
import ContactPage from './pages/ContactPage';

function App() {
  return (
    <div className='layout'>
      <div className='header'>
        <Header />
      </div>
      <div className='page'>
        <Routes>
          <Route path='/' element={<AboutPage />} />
          <Route path='/portfolio' element={<PortfolioPage />} />
          <Route path='/portfolio/:projectName' element={<ProjectPage />} />
          <Route path='contact' element={<ContactPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
