import React from 'react';
import { NewsMainSection } from '../components/NewsMainSection';
import Sponcers from '../components/Sponcers';
import Carosel from '../components/Carosel';
import { SubNews } from '../components/SubNews';
import CaroselBG from '../assets/trophiesBackGround.png';
import BG from '../assets/Rectangle_2_ct@2x.png';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';



const StyledCaroselBox = styled(Box)({
  background: `url(${CaroselBG})`,
  backgroundSize: 'cover',
});
const StyledSponsersBox = styled(Box)({
  background: `url(${BG})`,
  backgroundSize: 'cover',
});

const News = () => {
  return (
    <>
      <NewsMainSection />
      <SubNews />
      <StyledSponsersBox
        sx={{ height: { lg: '19rem', sm: '13rem', xs: '10rem' }, display: 'flex', alignItems: 'center' }}
      >
        <Sponcers />
      </StyledSponsersBox>
      {/* ------------------------ */}
      <StyledCaroselBox sx={{ height: { lg: '19rem', sm: '18rem', xs: '17rem' } }}>
        <Carosel />
      </StyledCaroselBox>
    </>
  );
};

export default News;
