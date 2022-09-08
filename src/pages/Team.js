//
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
import Heroes from '../components/Heroes';
import { MainSection } from '../components/MainSection';

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
const StyledMainSection = styled(Box)({
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
  // main section types
  const LDir = 'ltr';
  const txtDir = 'rtl';
  const sxLeft = { clipPath:{lg: 'polygon(0 0, 100% 0%, 44% 100%, 0% 100%)', xs:'100%'} };
  const sxRight = { clipPath:{lg: 'polygon(0px 0px, 100% 0%, 100% 100%, 44% 100%)', xs:'100%'} };
  const RDir = 'rtl';
  // carosel types
  const typeCoWorkers = 'CoWorkers';
  const typeProduction = 'Production';
  return (
    <Page title="Team">
      <StyledMainSection >
        <MainSection Dir={LDir} txtDir={txtDir} sxImage={sxLeft} />
        <MainSection Dir={RDir} txtDir={txtDir} sxImage={sxRight} />
      </StyledMainSection>
      {/* -------------------------- */}
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
    </Page>
  );
};

export default Team;
