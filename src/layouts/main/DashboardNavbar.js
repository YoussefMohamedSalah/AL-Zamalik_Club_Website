import PropTypes from 'prop-types';
// material
import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton, Typography, Divider, Paper, Button } from '@mui/material';
// components
import Iconify from '../../components/Iconify';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
//
import Searchbar from './Searchbar';
//
import Background from './background.png';
//
import logo2 from '../../components/logo.png';
//
import { Link as RouterLink } from 'react-router-dom';

// ----------------------------------------------------------------------

// const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  background: `url(${Background})`,
  backgroundSize: 'cover',

  // backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: '100%',
  },
}));

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'transparent',
  padding: theme.spacing(1),
  textAlign: 'center',
  color: 'black',
  fontSize: '20px',
  fontWeight: '600',
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  justifyContent: 'space-between',
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexWrap: 'wrap-reverse',
});
const LoginBotton = styled(Button)({
  backgroundColor: 'black',
  color: 'white',
  borderRadius: '25px',
  height: '30px',
});

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};

export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <RootStyle position="fixed" sx={{ height: { lg: '110px', sm: '110px', xs: '80px' } }}>
      <ToolbarStyle variant="primary" sx={{ display: { lg: 'none', sm: 'none', xs: 'flex' } }}>
        <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
        <Searchbar />
        <Box component="img" m={1} src={logo2} sx={{ width: '45px' }} />
      </ToolbarStyle>
      {/* --------------------- */}
      <Stack
        direction="row"
        spacing={{ xs: 0.5, sm: 1.5 }}
        style={{ height: '100px' }}
        sx={{ mr: 1, color: 'text.primary', display: { xs: 'none', sm: 'flex', lg: 'flex' } }}
      >
        <Box flex={5} style={{ color: 'black' }}>
          <Stack direction="column" spacing={{ xs: 0.5, sm: 1.5 }}>
            <Stack
              p={0.5}
              direction="row"
              gap={10}
              alignItems="center"
              spacing={{ xs: 0.5, sm: 1.5 }}
              style={{ color: 'black', background: 'red' }}
            >
              <LoginBotton variant="contained" endIcon={<AccountCircleIcon />}>
                تسجيل الدخول
              </LoginBotton>
              <Searchbar />
            </Stack>
            {/*  */}
            <Stack
              direction="row"
              sx={{ justifyContent: 'space-evenly' }}
              divider={<Divider orientation="vertical" flexItem />}
              spacing={2}
            >
              <RouterLink to="/team" style={{ textDecoration: 'none' }}>
                <Item>فريق العمل</Item>
              </RouterLink>
              <RouterLink to="/" style={{ textDecoration: 'none' }}>
                <Item>جدول المباريات</Item>
              </RouterLink>
              <RouterLink to="/history" style={{ textDecoration: 'none' }}>
                <Item>تاريخ النادي</Item>
              </RouterLink>
              <RouterLink to="/news" style={{ textDecoration: 'none' }}>
                <Item>الأخبار</Item>
              </RouterLink>
              <RouterLink to="/" style={{ textDecoration: 'none' }}>
                <Item>الرئيسية</Item>
              </RouterLink>
            </Stack>
            {/*  */}
          </Stack>
        </Box>
        <Box flex={1} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Stack direction="row" alignItems="center" justifyContent={'center'} style={{ color: 'black' }}>
            <RouterLink to="/" style={{ textDecoration: 'none' }}>
              <StyledToolbar style={{ padding: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                  variant="h4"
                  fontWeight={600}
                  m={0}
                  sx={{ color: 'black', fontSize: { lg: '30px', md: '20px', sm: '15px' } }}
                >
                  نادي الزمالك
                </Typography>
                <Box
                  component="img"
                  m={1}
                  src={logo2}
                  sx={{ width: { xs: '35px', sm: '40px', md: '50px', lg: '65px' } }}
                />
              </StyledToolbar>
            </RouterLink>
          </Stack>
        </Box>
      </Stack>
    </RootStyle>
  );
}
