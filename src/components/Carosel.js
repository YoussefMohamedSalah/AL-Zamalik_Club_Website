import React from 'react';
import Trophe from '../assets/trophe.png';
import Slider from 'react-slick';
import { Box, Stack, Typography } from '@mui/material';

const Carosel = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 100,
    centerPadding: '60px',
    autoplay: true,
    speed: 30000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          speed: 15000,
        },
      },
    ],
  };
  return (
    <Slider
      {...settings}
      ms={2}
      me={2}
      style={{
        width: '97%',
        height: '40vh',
        display: 'flex',
        justifyContent: 'space-evenly',
        color: 'white',
      }}
    >
      <Box>
        <Stack
          direction="column"
          p={5.5}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          style={{ color: 'white' }}
        >
          <img src={Trophe} alt="trophe" style={{ height: '20vh' }} />
          <Typography variant="h3" fontWeight={600} style={{ lineHeight: '1' }}>
            كأس السوبر
          </Typography>
          <Typography variant="h5" fontWeight={600} style={{ lineHeight: '1' }}>
            فاز بة نادي الزمالك بمجهود
          </Typography>
          <Typography style={{ color: 'red', lineHeight: '0.1', fontWeight: '700' }}>2020-2016</Typography>
          <span id="zamalekFlag"></span>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="column"
          p={4.5}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          style={{ color: 'white' }}
        >
          <img src={Trophe} alt="trophe" style={{ height: '20vh' }} />
          <Typography variant="h3" fontWeight={600} style={{ lineHeight: '1' }}>
            كأس السوبر
          </Typography>
          <Typography variant="h5" fontWeight={600} style={{ lineHeight: '1' }}>
            فاز بة نادي الزمالك بمجهود
          </Typography>
          <Typography style={{ color: 'red', lineHeight: '0.1', fontWeight: '700' }}>2020-2016</Typography>
          <span id="zamalekFlag"></span>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="column"
          p={4.5}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          style={{ color: 'white' }}
        >
          <img src={Trophe} alt="trophe" style={{ height: '20vh' }} />
          <Typography variant="h3" fontWeight={600} style={{ lineHeight: '1' }}>
            كأس السوبر
          </Typography>
          <Typography variant="h5" fontWeight={600} style={{ lineHeight: '1' }}>
            فاز بة نادي الزمالك بمجهود
          </Typography>
          <Typography style={{ color: 'red', lineHeight: '0.1', fontWeight: '700' }}>2020-2016</Typography>
          <span id="zamalekFlag"></span>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="column"
          p={4.5}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          style={{ color: 'white' }}
        >
          <img src={Trophe} alt="trophe" style={{ height: '20vh' }} />
          <Typography variant="h3" fontWeight={600} style={{ lineHeight: '1' }}>
            كأس السوبر
          </Typography>
          <Typography variant="h5" fontWeight={600} style={{ lineHeight: '1' }}>
            فاز بة نادي الزمالك بمجهود
          </Typography>
          <Typography style={{ color: 'red', lineHeight: '0.1', fontWeight: '700' }}>2020-2016</Typography>
          <span id="zamalekFlag"></span>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="column"
          p={4.5}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          style={{ color: 'white' }}
        >
          <img src={Trophe} alt="trophe" style={{ height: '20vh' }} />
          <Typography variant="h3" fontWeight={600} style={{ lineHeight: '1' }}>
            كأس السوبر
          </Typography>
          <Typography variant="h5" fontWeight={600} style={{ lineHeight: '1' }}>
            فاز بة نادي الزمالك بمجهود
          </Typography>
          <Typography style={{ color: 'red', lineHeight: '0.1', fontWeight: '700' }}>2020-2016</Typography>
          <span id="zamalekFlag"></span>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="column"
          p={4.5}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          style={{ color: 'white' }}
        >
          <img src={Trophe} alt="trophe" style={{ height: '20vh' }} />
          <Typography variant="h3" fontWeight={600} style={{ lineHeight: '1' }}>
            كأس السوبر
          </Typography>
          <Typography variant="h5" fontWeight={600} style={{ lineHeight: '1' }}>
            فاز بة نادي الزمالك بمجهود
          </Typography>
          <Typography style={{ color: 'red', lineHeight: '0.1', fontWeight: '700' }}>2020-2016</Typography>
          <span id="zamalekFlag"></span>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="column"
          p={4.5}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          style={{ color: 'white' }}
        >
          <img src={Trophe} alt="trophe" style={{ height: '20vh' }} />
          <Typography variant="h3" fontWeight={600} style={{ lineHeight: '1' }}>
            كأس السوبر
          </Typography>
          <Typography variant="h5" fontWeight={600} style={{ lineHeight: '1' }}>
            فاز بة نادي الزمالك بمجهود
          </Typography>
          <Typography style={{ color: 'red', lineHeight: '0.1', fontWeight: '700' }}>2020-2016</Typography>
          <span id="zamalekFlag"></span>
        </Stack>
      </Box>
      <Box>
        <Stack
          direction="column"
          p={4.5}
          alignItems="center"
          justifyContent="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
          style={{ color: 'white' }}
        >
          <img src={Trophe} alt="trophe" style={{ height: '20vh' }} />
          <Typography variant="h3" fontWeight={600} style={{ lineHeight: '1' }}>
            كأس السوبر
          </Typography>
          <Typography variant="h5" fontWeight={600} style={{ lineHeight: '1' }}>
            فاز بة نادي الزمالك بمجهود
          </Typography>
          <Typography style={{ color: 'red', lineHeight: '0.1', fontWeight: '700' }}>2020-2016</Typography>
          <span id="zamalekFlag"></span>
        </Stack>
      </Box>
    </Slider>
  );
};

export default Carosel;
