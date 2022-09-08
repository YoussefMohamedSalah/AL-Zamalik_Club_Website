// components
import Page from '../components/Page';
// 
import Carosel from '../components/Carosel';
import { Box } from '@mui/material';
//
import { styled } from '@mui/material/styles';
//
import CaroselBG from '../assets/trophiesBackGround.png';
import BG from '../assets/Rectangle_2_ct@2x.png';
import Sponcers from '../components/Sponcers';
import { SubNews } from '../components/SubNews';
import { Players } from '../components/Players';
import { ImagesGroup } from '../components/ImagesGroup';
//
const StyledCaroselBox = styled(Box)({
  background: `url(${CaroselBG})`,
  backgroundSize: 'cover',
});
const StyledSponsersBox = styled(Box)({
  background: `url(${BG})`,
  backgroundSize: 'cover',
});
const Home = () => {

  return (
    <Page title="Home">
      <ImagesGroup />
      {/* -------------------------- */}
      <Players />
      {/* -------------------------- */}
      <SubNews />
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
    </Page>
  );
};

export default Home;

