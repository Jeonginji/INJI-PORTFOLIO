import React, { useRef, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutMe from './pages/AboutMe';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Login from './pages/Login';
import Join from './pages/Join';
import Footer from './components/Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // 각 섹션에 대한 ref 생성
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div>
      <Header 
        isLoggedIn={isLoggedIn} 
        onLogout={handleLogout} 
        aboutRef={aboutRef} 
        skillsRef={skillsRef} 
        projectsRef={projectsRef} 
      />

      <Routes>
        {/* 메인 페이지에 섹션을 렌더링 */}
        <Route path='/' element={
          <>
            <div ref={aboutRef} style={{ minHeight: '100vh' }}>
              <AboutMe />
            </div>
            <div ref={skillsRef} style={{ minHeight: '100vh' }}>
              <Skills />
            </div>
            <div ref={projectsRef} style={{ minHeight: '100vh' }}>
              <Projects />
            </div>
          </>
        } />
        
        {/* 로그인 및 회원가입 페이지 */}
        <Route path='/login' element={<Login onLogin={handleLogin} setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/join' element={<Join />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
