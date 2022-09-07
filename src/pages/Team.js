import Carosel from '../components/Carosel';
import { Box } from '@mui/material';
//
import { styled } from '@mui/material/styles';
//
import CaroselBG from '../assets/trophiesBackGround.png';
import BG from '../assets/Rectangle_2_ct@2x.png';
import Sponcers from '../components/Sponcers';
import Heroes from '../components/Heroes';

//
const StyledCaroselBox = styled(Box)({
  background: `url(${CaroselBG})`,
  backgroundSize: 'cover',
});
const StyledSponsersBox = styled(Box)({
  background: `url(${BG})`,
  backgroundSize: 'cover',
});
const StyledHerouesBox = styled(Box)({
  background: `url(${BG})`,
  backgroundSize: 'cover',
  Height: '100%',
  display: 'flex',
  flexDirection: 'column',
  // paddingTop: '3rem',
  // margin: 'auto',
  overflow: 'auto',
});
const Team = () => {
  const typeCoWorkers = 'CoWorkers';
  const typeProduction = 'Production';
  return (
    <>
      <StyledHerouesBox>
        <Heroes type={typeCoWorkers} />
        <Heroes type={typeProduction} />
      </StyledHerouesBox>
      {/* -------------------------- */}
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

export default Team;