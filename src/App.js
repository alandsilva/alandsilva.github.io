import {
  Routes,
  Route
} from "react-router-dom";
import Header from "./components/Header";
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';

import './App.css'

function App() {
  return (
    <div className='layout'>
      <Header/>
    <div className='page'>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path=":projectName" element={<ProjectPage />} />
    </Routes>
    </div>
    </div>
  
  );
}

export default App;
