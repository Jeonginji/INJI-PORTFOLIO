import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LockIcon from '@mui/icons-material/Lock';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useState } from 'react';
import instance from '../axios';
import { useNavigate } from 'react-router-dom';

const theme = createTheme();

const LoginPage = ({setIsLoggedIn}) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const nav = useNavigate()

  const handleSubmit = async (e) => { 
    e.preventDefault();
    let res; // res 변수를 여기서 선언

    try {
      res = await instance.post('/handleSubmit', { id: id, pw: pw });
      console.log('Response:', res.data); // 응답 데이터 출력

      // 로그인 성공 여부 확인
      if (res.data.result === 'success') {
        // 세션 저장
        setIsLoggedIn(true)
        let obj = { auth: 'user', id: res.data.id };
        sessionStorage.setItem('info', JSON.stringify(obj));
        nav('/')

      } else {
        alert('다시 입력해주세요!');
        setId("");
        setPw("");
      }
    } catch (error) {
      console.error('Login error:', error); // 에러 처리
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 20,
            marginBottom: 20,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            backgroundColor: '#f3ede8',
            padding: '20px',
            borderRadius: '10px',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'black' }}>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            로그인
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField value={id} onChange={(e) => { setId(e.target.value) }}
              margin="normal"
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                sx: { color: 'black' },
              }}
              InputLabelProps={{
                sx: {
                  color: 'black',
                  '&.Mui-focused': {
                    color: 'black',
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <TextField value={pw} onChange={(e) => { setPw(e.target.value) }}
              margin="normal"
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                sx: { color: 'black' },
              }}
              InputLabelProps={{
                sx: {
                  color: 'black',
                  '&.Mui-focused': {
                    color: 'black',
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black',
                  },
                  '&:hover fieldset': {
                    borderColor: 'black',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black',
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'black', color: 'white' }}
            >
              로그인
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/join" variant="body2" sx={{ color: 'black' }}>
                  {"계정이 없으신가요? 회원가입"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default LoginPage;