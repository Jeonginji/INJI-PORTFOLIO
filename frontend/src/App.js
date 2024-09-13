import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Content from './pages/Content';
import Join from './pages/Join';
import Login from './pages/Login';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Content />} />
        <Route path='/join' element={<Join />} />
        <Route path='/login' element={<Login />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
