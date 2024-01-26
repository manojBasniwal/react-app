import './App.css';
import Home from "./screens/Home"
import { Routes, Route } from 'react-router-dom';
import NavbarHeader from './components/NavbarHeader';
import About from 'screens/About';
import Service from 'screens/Service';

function App() {
  return (
    <>
    <NavbarHeader/>
    <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/service" element={<Service/>}/>
    </Routes>
    
    </>
  );
}

export default App;
