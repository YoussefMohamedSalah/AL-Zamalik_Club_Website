import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { Box, Typography, Toolbar, styled } from '@mui/material';
import logo2 from './logo.png';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-evenly ',
  width: '100%',
  padding: 0,
});

export default function Logo({ disabledLink = false, sx }) {
  // OR
  const logo = (
    <StyledToolbar>
      <Typography variant="h2" fontWeight={700} m={2} sx={{ color: 'black' }}>
        نادي الزمالك
      </Typography>
      <Box component="img" src={logo2} sx={{ width: 65, height: 90, ...sx }} />
    </StyledToolbar>
  );

  if (disabledLink) {
    return { logo };
  }

  return (
    <RouterLink to="/" style={{ textDecoration: 'none' }}>
      {logo}
    </RouterLink>
  );
}
