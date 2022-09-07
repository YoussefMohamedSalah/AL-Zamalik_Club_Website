import React from 'react';
import Hereo from '../assets/heroe.png';
import Slider from 'react-slick';
import { Box, CardActions, CardContent, IconButton, Stack, Typography } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';

const Heroes = ({ type }) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    speed: 1000,
    cssEase: 'linear',
    pauseOnHover: true,
    width: '10%',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
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
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Stack direction="column" alignItems="center" justifyContent={'center'}>
      <Stack direction="column" alignItems="center" justifyContent={'center'}>
        <Typography variant="h4" fontWeight={600} m={0} sx={{ color: '#D23538' }}>
          ابطال خلف الكواليس
        </Typography>
        {type === 'CoWorkers' ? (
          <Typography variant="h4" fontWeight={600} m={0} sx={{ color: 'black' }}>
            فريق عمل نادي الزمالك
          </Typography>
        ) : (
          <Typography variant="h4" fontWeight={600} m={0} sx={{ color: 'black' }}>
            فريق عمل الإنتاج الفني
          </Typography>
        )}
      </Stack>
      <Stack
        // id="heroes"
        className="d-flex justify-content-evenly align-items-center "
        style={{ marginBottom: '3rem', width: '99%' }}
      >
        {/* --------------------------------------------------------------------- */}
        <Slider
          {...settings}
          style={{
            width: '100%',
            height: '50vh',
            display: 'flex',
            justifyContent: 'space-evenly',
            margenRight: '2rem',
            marginLeft: '2rem',
            position: 'relative',
          }}
        >
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              width: '13rem',
              height: '20rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div id="img">
                <img src={Hereo} alt="hereo" style={{ width: '10rem' }} />
              </div>
              <div
                style={{
                  background: '#DA555A',
                  height: '10rem',
                  width: '13rem',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '3px',
                }}
                id="details"
              >
                <div
                  id="info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p>Youssef Mohamed</p>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '5rem',
                  }}
                >
                  <ShareIcon />
                  <ShareIcon />
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              width: '13rem',
              height: '20rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div id="img">
                <img src={Hereo} alt="hereo" style={{ width: '10rem' }} />
              </div>
              <div
                style={{
                  background: '#DA555A',
                  height: '10rem',
                  width: '13rem',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '3px',
                }}
                id="details"
              >
                <div
                  id="info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p>Youssef Mohamed</p>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div
                  id="socials"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '5rem',
                  }}
                >
                  <ShareIcon />
                  <ShareIcon />
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              width: '13rem',
              height: '20rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div id="img">
                <img src={Hereo} alt="hereo" style={{ width: '10rem' }} />
              </div>
              <div
                style={{
                  background: '#DA555A',
                  height: '10rem',
                  width: '13rem',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '3px',
                }}
                id="details"
              >
                <div
                  id="info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p>Youssef Mohamed</p>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div
                  id="socials"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '5rem',
                  }}
                >
                  <ShareIcon />
                  <ShareIcon />
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              width: '13rem',
              height: '20rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div id="img">
                <img src={Hereo} alt="hereo" style={{ width: '10rem' }} />
              </div>
              <div
                style={{
                  background: '#DA555A',
                  height: '10rem',
                  width: '13rem',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '3px',
                }}
                id="details"
              >
                <div
                  id="info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p>Youssef Mohamed</p>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div
                  id="socials"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '5rem',
                  }}
                >
                  <ShareIcon />
                  <ShareIcon />
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              width: '13rem',
              height: '20rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div id="img">
                <img src={Hereo} alt="hereo" style={{ width: '10rem' }} />
              </div>
              <div
                style={{
                  background: '#DA555A',
                  height: '10rem',
                  width: '13rem',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '3px',
                }}
                id="details"
              >
                <div
                  id="info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p>Youssef Mohamed</p>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div
                  id="socials"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '5rem',
                  }}
                >
                  <ShareIcon />
                  <ShareIcon />
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------- */}
          <div
            style={{
              width: '13rem',
              height: '20rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
              <div id="img">
                <img src={Hereo} alt="hereo" style={{ width: '10rem' }} />
              </div>
              <div
                style={{
                  background: '#DA555A',
                  height: '10rem',
                  width: '13rem',
                  color: 'white',
                  display: 'flex',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  alignItems: 'center',
                  padding: '3px',
                }}
                id="details"
              >
                <div
                  id="info"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <p>Youssef Mohamed</p>
                  <p>Lorem ipsum dolor sit amet consectetur</p>
                </div>
                <div
                  id="socials"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '5rem',
                  }}
                >
                  <ShareIcon />
                  <ShareIcon />
                  <ShareIcon />
                </div>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------- */}

          {/* --------------------------------------------------------------------- */}
        </Slider>
      </Stack>
    </Stack>
  );
};

export default Heroes;
