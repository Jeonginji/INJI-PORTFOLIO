import React, { forwardRef } from 'react';
import { Grid, Typography, Paper } from '@mui/material';
import { SiHtml5, SiCss3, SiJavascript, SiNodedotjs, SiReact, SiMysql, SiOracle, SiGit, SiGithub } from 'react-icons/si';
import { FaFigma } from 'react-icons/fa'; // Figma 아이콘만 import

const Skills = forwardRef((props, ref) => {
  return (
    <section ref={ref} id="skills" style={{ backgroundColor: '#f3ede8', padding: '40px 0', margin: 0 }}>
      <Typography 
        variant="h2" 
        align="center" 
        style={{ 
          fontFamily: 'Freesentation-9Black', 
          fontSize: '2.5rem', 
          fontWeight: 'bold' 
        }}
      >
        My Skills
      </Typography>
      <Typography 
        align="center" 
        style={{ 
          fontFamily: 'Freesentation-9Black', 
          fontSize: '1.25rem', // 크기 조정
          fontWeight: 'normal', 
          marginBottom: '30px' 
        }}
      >
        What I have
      </Typography>

      {/* 웹 기술 */}
      <Typography align="center" variant="h5" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
        Frontend
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {[
          { Icon: SiHtml5, label: 'HTML', color: '#E55125' },
          { Icon: SiCss3, label: 'CSS', color: '#0A73B8' },
          { Icon: SiJavascript, label: 'JavaScript', color: '#E5A228' },
        ].map(({ Icon, label, color }) => (
          <Grid item xs={12} sm={4} md={3} key={label} textAlign="center">
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }}>
              <Icon size={60} style={{ color }} />
              <Typography variant="h6">{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 서버 사이드 기술 */}
      <Typography align="center" variant="h5" style={{ fontWeight: 'bold', margin: '30px 0 20px' }}>
        Backend
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {[
          { Icon: SiNodedotjs, label: 'Node.js', color: '#8CC84B' },
          { Icon: SiReact, label: 'React', color: '#61DAFB' },
        ].map(({ Icon, label, color }) => (
          <Grid item xs={12} sm={4} md={3} key={label} textAlign="center">
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }}>
              <Icon size={60} style={{ color }} />
              <Typography variant="h6">{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 디자인 툴 */}
      <Typography align="center" variant="h5" style={{ fontWeight: 'bold', margin: '30px 0 20px' }}>
        Design Tools
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {[
          { Icon: FaFigma, label: 'Figma', color: '#F24E1E' },
          { src: '/assets/photoshop.png', label: 'Photoshop' },
          { src: '/assets/illustrator.png', label: 'Illustrator' },
        ].map(({ Icon, src, label, color }) => (
          <Grid item xs={12} sm={4} md={3} key={label} textAlign="center">
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }}>
              {Icon ? (
                <Icon size={60} style={{ color }} />
              ) : (
                <img src={src} alt={label} style={{ width: '60px', height: '60px', objectFit: 'contain' }} />
              )}
              <Typography variant="h6">{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 프로그래밍 언어 */}
      <Typography align="center" variant="h5" style={{ fontWeight: 'bold', margin: '30px 0 20px' }}>
      Language
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={4} md={3} textAlign="center">
          <Paper elevation={3} style={{ padding: '10px', borderRadius: '10px', backgroundColor: '#fff' }}>
            <img 
              src="/assets/python.png" 
              alt="Python" 
              style={{ width: '80px', height: '80px', objectFit: 'contain' }} 
            />
            <Typography variant="h6">Python</Typography>
          </Paper>
        </Grid>
      </Grid>

      {/* 데이터베이스 */}
      <Typography align="center" variant="h5" style={{ fontWeight: 'bold', margin: '30px 0 20px' }}>
        Database
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {[
          { Icon: SiMysql, label: 'MySQL', color: '#00758F' },
          { Icon: SiOracle, label: 'Oracle', color: '#F03C20' },
        ].map(({ Icon, label, color }) => (
          <Grid item xs={12} sm={4} md={3} key={label} textAlign="center">
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }}>
              <Icon size={60} style={{ color }} />
              <Typography variant="h6">{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

      {/* 버전 관리 */}
      <Typography align="center" variant="h5" style={{ fontWeight: 'bold', margin: '30px 0 20px' }}>
        Version Control
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {[
          { Icon: SiGit, label: 'Git', color: '#F05032' },
          { Icon: SiGithub, label: 'GitHub', color: '#181717' },
        ].map(({ Icon, label, color }) => (
          <Grid item xs={12} sm={4} md={3} key={label} textAlign="center">
            <Paper elevation={3} style={{ padding: '20px', borderRadius: '10px', backgroundColor: '#fff' }}>
              <Icon size={60} style={{ color }} />
              <Typography variant="h6">{label}</Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </section>
  );
});

export default Skills;
