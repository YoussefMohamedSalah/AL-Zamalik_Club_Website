import * as React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Button, ButtonGroup, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

//         sx={{ mr: 1, color: 'text.primary', display: { xs: 'none', sm: 'flex', lg: 'flex' } }}
const fButton = styled(Button)({
  color: 'inherit',
  alignItems: 'center',
  justifyContent: 'center',
});

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      <Link color="inherit" href="https://el-zamalek.com">
        El-Zamalek SC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function Footer() {
  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'rgb(41 41 41)',
        bottom: '0',
        // position: 'fixed',
        width: '100%',
        // minHeight: '100vh',
      }}
    >
      {/* <CssBaseline /> */}
      <Container
        component="footer"
        sx={{ mt: 2, mb: 2, width: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column' }}
        maxWidth="xl"
      >
        <Typography variant="h5" component="h1" gutterBottom>
          Follow Zamalek SC On Social Media
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {'Pin a footer to the bottom of the viewport.'}
          {'The footer will move as the main element of the page grows.'}
        </Typography>
        <Typography variant="body1">Sticky footer placeholder.</Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          sx={{ justifyContent: 'space-between', flexWrap: 'wrap' }}
          gutterBottom
        >
          <Copyright />
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            sx={{ display: 'flex', flexWrap: 'wrap', fontSize: { xs: '10px', sm: '12px', lg: '13px' } }}
          >
            <fButton>&nbsp; Leagal Terms |</fButton>
            <fButton>&nbsp; Privacy Policy |</fButton>
            <fButton>&nbsp; Cookies |</fButton>
            <fButton>&nbsp; Accessibility |</fButton>
            <fButton>&nbsp; Contact Us |</fButton>
            <fButton>&nbsp; Support/FAQs </fButton>
          </ButtonGroup>
        </Stack>
      </Container>
    </Box>
  );
}
