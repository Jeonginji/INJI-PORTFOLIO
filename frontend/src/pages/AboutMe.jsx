import React from 'react';
import { Typography, Container } from '@mui/material';

const AboutMe = () => {
  return (
    <section 
      id="about" 
      style={{ 
        backgroundImage: 'url(/Jeong.png)', // 배경 이미지 경로
        backgroundSize: 'cover', // 배경 이미지 전체를 덮도록
        backgroundPosition: 'center', // 이미지 중심에 위치
        backgroundRepeat: 'no-repeat', // 이미지 반복 방지
        height: '100vh', // 전체 화면 높이로 설정
        display: 'flex', // Flexbox로 정렬
        flexDirection: 'column', // 세로 방향 정렬
        alignItems: 'center', // 수평 중앙 정렬
        justifyContent: 'center', // 수직 중앙 정렬
        color: 'black' // 텍스트 색상 변경
      }}
    >
      <Container 
        maxWidth="md" 
        style={{ 
          textAlign: 'center', 
          backdropFilter: 'blur(5px)', 
          padding: '40px', // 패딩 추가
          backgroundColor: 'rgba(255, 255, 255, 0.8)', // 반투명 배경 추가
          borderRadius: '10px', // 모서리 둥글게
          marginBottom: '20px' // 아래쪽 여백 추가
        }}
      >
        <Typography 
          variant="h2" 
          className="fade-in" // 애니메이션 클래스
          style={{ 
            fontWeight: 'bold', 
            marginBottom: '10px', 
            fontFamily: 'Freesentation-9Black'
          }}
        >
          저는 프론트엔드 개발자 정인지입니다.
        </Typography>
      </Container>
      <Container 
        maxWidth="md" 
        style={{ 
          textAlign: 'center', 
          backdropFilter: 'blur(5px)', 
          padding: '40px', // 패딩 추가
          borderRadius: '10px', // 모서리 둥글게
        }}
      >
        <Typography 
          variant="body1" 
          className="slide-in" // 애니메이션 클래스
          style={{ 
            marginBottom: '0', 
            fontSize: '1.1rem', 
            lineHeight: '1.6'
          }}
        >
          "코드와 멜로디로 창의적 문제 해결!<br/>음악에서 얻은 섬세함으로 사용자 경험을 풍부하게 만들고 있어요."
        </Typography>
      </Container>
    </section>
  );
};

export default AboutMe;
