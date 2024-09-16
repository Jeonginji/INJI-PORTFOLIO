import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

const pages = [
  { name: 'Notion', url: 'https://www.notion.so/2f56f117037b4bf8a0371b46c0ff84e0?pvs=4' },
  { name: 'GitHub', url: 'https://github.com/Jeonginji' },
  { name: 'Project', url: 'https://your-project-url.com' }
];
const settings = ['About me', 'Skill', 'Login'];

const ResponsiveAppBar = ({ isLoggedIn, onLogout }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLoginLogout = () => {
    handleCloseUserMenu();
    if (isLoggedIn) {
      onLogout(); // 로그아웃 처리
    } else {
      navigate('/login'); // 로그인 페이지로 이동
    }
  };

  const scrollToAboutMe = () => {
    const aboutMeSection = document.getElementById('about-me');
    if (aboutMeSection) {
      aboutMeSection.scrollIntoView({ behavior: 'smooth' });
      handleCloseUserMenu(); // 메뉴 닫기
    }
  };

  const handlePortfolioClick = () => {
    navigate('/'); // 메인 페이지로 이동
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#f3ede8' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            onClick={handlePortfolioClick} // 메인 페이지로 이동
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Freesentation-9Black',
              fontWeight: 600,
              letterSpacing: '.3rem',
              color: 'black',
              textDecoration: 'none',
              cursor: 'pointer', // 클릭 가능임을 나타내는 커서
            }}
          >
            Inji's Portfolio
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="black"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={() => window.open(page.url, '_blank')}>
                  <Typography sx={{ textAlign: 'center' }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={() => window.open(page.url, '_blank')}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Inji" src="inji.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                setting === 'Login' ? (
                  <MenuItem key={setting} onClick={handleLoginLogout}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {isLoggedIn ? 'Logout' : 'Login'}
                    </Typography>
                  </MenuItem>
                ) : setting === 'About me' ? (
                  <MenuItem key={setting} onClick={scrollToAboutMe}>
                    <Typography sx={{ textAlign: 'center', textDecoration: 'none', color: 'inherit' }}>
                      About me
                    </Typography>
                  </MenuItem>
                ) : (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography sx={{ textAlign: 'center' }}>
                      {setting}
                    </Typography>
                  </MenuItem>
                )
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default ResponsiveAppBar;
