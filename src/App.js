import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import TopBar from './components/TopBar';
import Home from './pages/homePage/home';
import About from './pages/homePage/AboutMe'; // Hakkımda sayfası
import Solana from './pages/solana/Solana';
import Blockchain from './pages/blockchain/Blockchain'
import Gameiks from './pages/gameiks/Gameiks'
import Projelerimiz from './pages/projelerimiz/Projelerimiz'
import Contact from './pages/contact/Contract'
import Login from './pages/login/Login'
import Register from './pages/register/Register'


const App = () => {
  return (
    <Router>
      <div>
        <TopBar />
        
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

    
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/solana" element={<Solana />} />
          <Route path="/blockchain" element={<Blockchain />} />
          <Route path="/gameiks" element={<Gameiks />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projelerimiz" element={<Projelerimiz />} />


          
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
