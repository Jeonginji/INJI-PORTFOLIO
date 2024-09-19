import React from 'react';
import { Box, Typography, Container } from '@mui/material';

const AboutMe = () => {
  return (
    <section id="about" style={{ backgroundColor: 'white', padding: '60px 0', margin: 0 }}>
      <Container maxWidth="md" style={{ textAlign: 'center' }}>
        <Typography 
          variant="h2" 
          className="fade-in" // 여기서 애니메이션 클래스 추가
          style={{ 
            fontWeight: 'bold', 
            marginBottom: '20px', 
            fontFamily: 'Freesentation-9Black'
          }}
        >
          저는 프론트엔드 개발자 정인지입니다.
        </Typography>
        <Typography 
          variant="body1" 
          className="slide-in" // 여기서 애니메이션 클래스 추가
          style={{ 
            marginBottom: '40px', 
            fontSize: '1.1rem', 
            lineHeight: '1.6'
          }}
        >
          "코드와 멜로디로 창의적 문제 해결!<br/>음악에서 얻은 섬세함으로 사용자 경험을 풍부하게 만들고 있어요."
        </Typography>
        {/* <Box textAlign="center">
          <img 
            src="/inji.jpg"
            alt="정인지"
            style={{ 
              width: '100%', 
              maxWidth: '400px', 
              height: 'auto', 
              borderRadius: '10px', 
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
              display: 'block', 
              margin: '0 auto' 
            }} 
          />
        </Box> */}
      </Container>
    </section>
  );
};

export default AboutMe;
