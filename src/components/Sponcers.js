import React from 'react';
import ObourLand from '../assets/obourland.png';
import Alkahera from '../assets/alkahera.png';
import Aletehad from '../assets/etehad.png';
import Fenway from '../assets/fenway.png';
import Altaieb from '../assets/TIB-logo-NEW-04.png';
import { Box, Stack } from '@mui/material';

const Sponcers = () => {
  //   const imgSizing = { height: { lg: '1rem', sm: '18rem', xs: '17rem' } };

  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ padding: { lg: '1rem', sm: '0.4rem', xs: '0.1rem' } }}
    >
      <Box sx={{ minWidth: 40, padding: { lg: '1rem', sm: '0.4rem', xs: '0.1rem' } }}>
        <img src={Altaieb} alt="sponcer" />
      </Box>
      <Box sx={{ minWidth: 40, padding: { lg: '1rem', sm: '0.4rem', xs: '0.1rem' } }}>
        <img src={Fenway} alt="sponcer" />
      </Box>
      <Box sx={{ minWidth: 40, padding: { lg: '1rem', sm: '0.4rem', xs: '0.1rem' } }}>
        <img src={Alkahera} alt="sponcer" />
      </Box>
      <Box sx={{ minWidth: 40, padding: { lg: '1rem', sm: '0.4rem', xs: '0.1rem' } }}>
        <img src={Aletehad} alt="sponcer" />
      </Box>
      <Box sx={{ minWidth: 40, padding: { lg: '1rem', sm: '0.4rem', xs: '0.1rem' } }}>
        <img src={ObourLand} alt="sponcer" />
      </Box>
    </Stack>
  );
};

export default Sponcers;
