import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { useState } from 'react';
import instance from '../axios';

const theme = createTheme();

const Join = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [name, setName] = useState("");

  const handleJoin = async (e) => {
    e.preventDefault();
    console.log(id, pw, name);

    try {
      const res = await instance.post('handleJoin', { userName: name, id: id, pw: pw });
      console.log('Response:', res.data);

      if(res.data.result === 'success'){
        alert('환영합니다!')

        window.location.href="/"
        /* Header는 Routes에 포함되어있지 않기 때문에
            Routes를 이용한 nav를 사용할 때 header는 렌더링이 되지 않음
            => window.location.href <- 전체 새로고침
        */
      }

      // 입력 필드 초기화
      setName("");
      setId("");
      setPw("");
    } catch (error) {
      console.error('Error during registration:', error);
      // 에러 메시지 처리 (예: 알림 표시)
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
            <PersonIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box component="form" onSubmit={handleJoin} noValidate sx={{ mt: 1 }}>
            <TextField value={name} onChange={(e) => { setName(e.target.value) }}
              margin="normal"
              fullWidth
              id="username"
              label="사용자 이름"
              name="username"
              autoComplete="username"
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
            <TextField value={id} onChange={(e) => { setId(e.target.value) }}
              margin="normal"
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
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
              가입하기
            </Button>
            <Grid container justifyContent="center">
              <Grid item>
                <Link href="/login" variant="body2" sx={{ color: 'black' }}>
                  {"이미 계정이 있으신가요? 로그인"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Join;
