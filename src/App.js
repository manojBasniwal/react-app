import './App.css';
import Home from "./screens/Home"
import { Routes, Route } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader';

function App() {
  return (
    <>
    <NavbarHeader/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
    </Routes>
    
    </>
  );
}

export default App;
