import { useState } from 'react';
import { Outlet } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
//
import DashboardNavbar from './DashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import Footer from '../../components/Footer';
//
import Background from './background.png';

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 80;
const APP_BAR_DESKTOP = 110;

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  maxHeight: '100%',
  overflow: 'hidden',
});

const MainStyle = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  minWidth: '100%',
  background: `url(${Background})`,
  backgroundSize: 'cover',
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
  },
  [theme.breakpoints.up('xs')]: {
    paddingTop: APP_BAR_MOBILE,
    // paddingLeft: theme.spacing(2),
    // paddingRight: theme.spacing(2),
  },
}));

// ----------------------------------------------------------------------

export default function MainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <RootStyle>
      <DashboardNavbar onOpenSidebar={() => setOpen(true)} />
      <DashboardSidebar isOpenSidebar={open} onCloseSidebar={() => setOpen(false)} />
      <MainStyle>
        <Outlet />
        <Footer />
      </MainStyle>
    </RootStyle>
  );
}
