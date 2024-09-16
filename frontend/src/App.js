import React from 'react';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './pages/Content';
import Join from './pages/Join';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true)
  const handleLogout = () => setIsLoggedIn(false)

  return (
    <div>
      <Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login onLogin={handleLogin} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
