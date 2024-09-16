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

const theme = createTheme();

const LoginPage = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
            <TextField
              margin="normal"
              fullWidth
              id="email"
              label="이메일 주소"
              name="email"
              autoComplete="email"
              autoFocus
              InputProps={{
                sx: { color: 'black' }, // 글자 색상 검정색으로 변경
              }}
              InputLabelProps={{
                sx: {
                  color: 'black', // 레이블 색상 검정색으로 변경
                  '&.Mui-focused': {
                    color: 'black', // 포커스 시 레이블 색상
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // 기본 테두리 색상
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // hover 시 테두리 색상
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // 포커스 시 테두리 색상
                  },
                },
              }}
            />
            <TextField
              margin="normal"
              fullWidth
              name="password"
              label="비밀번호"
              type="password"
              id="password"
              autoComplete="current-password"
              InputProps={{
                sx: { color: 'black' }, // 글자 색상 검정색으로 변경
              }}
              InputLabelProps={{
                sx: {
                  color: 'black', // 레이블 색상 검정색으로 변경
                  '&.Mui-focused': {
                    color: 'black', // 포커스 시 레이블 색상
                  },
                },
              }}
              sx={{
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'black', // 기본 테두리 색상
                  },
                  '&:hover fieldset': {
                    borderColor: 'black', // hover 시 테두리 색상
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'black', // 포커스 시 테두리 색상
                  },
                },
              }}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2, bgcolor: 'black', color: 'white' }} // 버튼 색상 검정색으로
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
