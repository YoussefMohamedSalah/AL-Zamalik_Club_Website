import React from 'react';
import Slider from 'react-slick';
import { Box, Stack, Typography } from '@mui/material';
import Hero from '../assets/heroe.png';
import './Player.css';

//

export const Players = () => {
  let settings = {
    focusOnSelect: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
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
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Stack
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ paddingTop: { lg: '3rem', md: '3rem', xs: '0rem' } }}
    >
      <Typography variant="h3" sx={{ color: 'red' }}>
        اللاعبين
      </Typography>
      <div style={{ width: '97%' }}>
        <Slider
          {...settings}
          ms={2}
          me={2}
          style={{
            width: '97%',
            height: '80vh',
            color: 'white',
          }}
        >
          <div>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="player_carosel_info"
              sx={{ height: '500px', position: 'relative', display: 'flex!important' }}
            >
              <img src={Hero} alt="hero" style={{ position: 'absolute' }} />
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="Space-between"
                sx={{ position: 'absolute', bottom: '0', padding: '1rem 1rem' }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  id="bottom_player_sec"
                  sx={{ height: '40%', width: '100%', paddingBottom: '2rem' }}
                >
                  <Stack direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="h5">10 Ahmed Hamed</Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#D81415',
                      }}
                    >
                      Forward
                    </Typography>
                  </Stack>
                  <Box className="playerSubInfo">
                    <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          هجمات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">405</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          0
                        </Typography>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          أهداف الزمالك
                        </Typography>
                        <Stack direction="column" alignItems="center" justifyContent="space-between">
                          <Typography variant="subtitle1">101</Typography>
                          <Typography
                            variant="body1"
                            style={{
                              lineHeight: '1',
                              fontSize: '15PX',
                            }}
                          >
                            2022/2023 Season
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              color: '#D81415',
                            }}
                          >
                            3
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          تمريرات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">101</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          30
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </div>
          <div>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="player_carosel_info"
              sx={{ height: '500px', position: 'relative', display: 'flex!important' }}
            >
              <img src={Hero} alt="hero" style={{ position: 'absolute' }} />
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="Space-between"
                sx={{ position: 'absolute', bottom: '0', padding: '0rem 1rem' }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  id="bottom_player_sec"
                  sx={{ height: '40%', width: '100%', paddingBottom: '2rem' }}
                >
                  <Stack direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="h5">10 Ahmed Hamed</Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#D81415',
                      }}
                    >
                      Forward
                    </Typography>
                  </Stack>
                  <Box className="playerSubInfo">
                    <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          هجمات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">405</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          0
                        </Typography>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          أهداف الزمالك
                        </Typography>
                        <Stack direction="column" alignItems="center" justifyContent="space-between">
                          <Typography variant="subtitle1">101</Typography>
                          <Typography
                            variant="body1"
                            style={{
                              lineHeight: '1',
                              fontSize: '15PX',
                            }}
                          >
                            2022/2023 Season
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              color: '#D81415',
                            }}
                          >
                            3
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          تمريرات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">101</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          30
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </div>
          <div>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="player_carosel_info"
              sx={{ height: '500px', position: 'relative', display: 'flex!important' }}
            >
              <img src={Hero} alt="hero" style={{ position: 'absolute' }} />
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="Space-between"
                sx={{ position: 'absolute', bottom: '0', padding: '0rem 1rem' }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  id="bottom_player_sec"
                  sx={{ height: '40%', width: '100%', paddingBottom: '2rem' }}
                >
                  <Stack direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="h5">10 Ahmed Hamed</Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#D81415',
                      }}
                    >
                      Forward
                    </Typography>
                  </Stack>
                  <Box className="playerSubInfo">
                    <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          هجمات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">405</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          0
                        </Typography>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          أهداف الزمالك
                        </Typography>
                        <Stack direction="column" alignItems="center" justifyContent="space-between">
                          <Typography variant="subtitle1">101</Typography>
                          <Typography
                            variant="body1"
                            style={{
                              lineHeight: '1',
                              fontSize: '15PX',
                            }}
                          >
                            2022/2023 Season
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              color: '#D81415',
                            }}
                          >
                            3
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          تمريرات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">101</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          30
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </div>
          <div>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="player_carosel_info"
              sx={{ height: '500px', position: 'relative', display: 'flex!important' }}
            >
              <img src={Hero} alt="hero" style={{ position: 'absolute' }} />
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="Space-between"
                sx={{ position: 'absolute', bottom: '0', padding: '0rem 1rem' }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  id="bottom_player_sec"
                  sx={{ height: '40%', width: '100%', paddingBottom: '2rem' }}
                >
                  <Stack direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="h5">10 Ahmed Hamed</Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#D81415',
                      }}
                    >
                      Forward
                    </Typography>
                  </Stack>
                  <Box className="playerSubInfo">
                    <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          هجمات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">405</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          0
                        </Typography>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          أهداف الزمالك
                        </Typography>
                        <Stack direction="column" alignItems="center" justifyContent="space-between">
                          <Typography variant="subtitle1">101</Typography>
                          <Typography
                            variant="body1"
                            style={{
                              lineHeight: '1',
                              fontSize: '15PX',
                            }}
                          >
                            2022/2023 Season
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              color: '#D81415',
                            }}
                          >
                            3
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          تمريرات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">101</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          30
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </div>
          <div>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="center"
              className="player_carosel_info"
              sx={{ height: '500px', position: 'relative', display: 'flex!important' }}
            >
              <img src={Hero} alt="hero" style={{ position: 'absolute' }} />
              <Stack
                direction="column"
                alignItems="center"
                justifyContent="Space-between"
                sx={{ position: 'absolute', bottom: '0', padding: '0rem 1rem' }}
              >
                <Stack
                  direction="column"
                  alignItems="center"
                  justifyContent="center"
                  id="bottom_player_sec"
                  sx={{ height: '40%', width: '100%', paddingBottom: '2rem' }}
                >
                  <Stack direction="column" alignItems="center" justifyContent="center">
                    <Typography variant="h5">10 Ahmed Hamed</Typography>
                    <Typography
                      variant="subtitle1"
                      sx={{
                        color: '#D81415',
                      }}
                    >
                      Forward
                    </Typography>
                  </Stack>
                  <Box className="playerSubInfo">
                    <Stack direction="row" alignItems="center" justifyContent="space-evenly">
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          هجمات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">405</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          0
                        </Typography>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        sx={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          أهداف الزمالك
                        </Typography>
                        <Stack direction="column" alignItems="center" justifyContent="space-between">
                          <Typography variant="subtitle1">101</Typography>
                          <Typography
                            variant="body1"
                            style={{
                              lineHeight: '1',
                              fontSize: '15PX',
                            }}
                          >
                            2022/2023 Season
                          </Typography>
                          <Typography
                            variant="h5"
                            sx={{
                              color: '#D81415',
                            }}
                          >
                            3
                          </Typography>
                        </Stack>
                      </Stack>
                      <Stack
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                        style={{ lineHeight: '0.3', padding: '5px' }}
                      >
                        <Typography variant="h5" className="fs-5 ">
                          تمريرات الزمالك
                        </Typography>
                        <Typography variant="subtitle1">101</Typography>
                        <Typography
                          variant="body1"
                          style={{
                            lineHeight: '1',
                            fontSize: '15PX',
                          }}
                        >
                          2022/2023 Season
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            color: '#D81415',
                          }}
                        >
                          30
                        </Typography>
                      </Stack>
                    </Stack>
                  </Box>
                </Stack>
              </Stack>
            </Stack>
          </div>
        </Slider>
      </div>
    </Stack>
  );
};
