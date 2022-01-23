import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import PortfolioPage from './pages/PortfolioPage';
import ProjectPage from './pages/ProjectPage';
import IntroductionPage from './pages/IntroductionPage';
import './App.css';

function App() {
  return (
    <div className='layout'>
      <div className='header'>
        <Header />
      </div>
      <div className='page'>
        <Routes>
          <Route path='/' element={<PortfolioPage />} />
          <Route path='/info' element={<IntroductionPage />} />
          <Route path=':projectName' element={<ProjectPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
