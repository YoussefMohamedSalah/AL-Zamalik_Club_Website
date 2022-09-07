import React from 'react';
import Mortada from '../assets/Mortada.jpg';
import { Box, Stack, Typography, Chip } from '@mui/material';
import smallSlide from '../assets/smallslide.png';
import videoPlay from '../assets/play-video-icon-png-7.png';
import MainRightTop from '../assets/MainTeam.png';
import MainLeftTop from '../assets/peace.png';
import MainLeftBottom from '../assets/coach.png';
import { red } from '@mui/material/colors';
import { styled } from '@mui/material/styles';

// 
const ShadowBox = styled(Box)({
  clipPath: "polygon(75% 0%, 100% 0%, 100% 100%, 0% 100%)",
  zIndex: "22",
  width: "100%",
  height: "100%",
  backgroundColor: "#20202085",
  alignSelf: "center",
  position: 'absolute',
  direction: "rtl",

});

export const NewsMainSection = ({ Dir, txtDir, imgDir, sxImage }) => {

  return (
    <Stack
      direction="row"
      alignItems="top"
      justifyContent="space-between"
      gap={1}
      sx={{ paddingTop: { xs: '0px', lg: '2rem' } }}
    >
      {/* left section */}
      <Box flex={68}>
        <Stack direction="Column" style={{ color: 'white' }}>
          <Box flex={1} style={{ backgroundColor: ' rgba(0, 0, 0, 0.5)' }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              style={{ position: 'relative', cursor: 'pointer', background: ' rgba(0, 0, 0, 0.5)!important' }}
            >
              <img
                src={MainLeftTop}
                alt="Notebook"
                style={{ width: '100%', backgroundSize: 'cover', filter: 'brightness(0.5)' }}
              />
              {/* txt section */}
              <Stack
                direction="Column"
                justifyContent="space-between"
                style={{ position: 'absolute', height: '94%', width: '95%' }}
              >
                <Stack direction="row" justifyContent="end" alignItems="top" gap={1}>
                  <Chip
                    label="حصرياً"
                    as="overline"
                    onClick={() => console.log('clicked')}
                    style={{ background: 'black', color: 'white', width: '5rem' }}
                  />
                  <Chip
                    label="فيديو"
                    as="overline"
                    onClick={() => console.log('clicked')}
                    style={{ background: 'red', color: 'white', width: '5rem' }}
                  />
                  {/* <Box id="padge_Red">
                    <Typography variant="h6">فيديو</Typography>
                  </Box> */}
                </Stack>
                {/* icon */}
                <img src={videoPlay} alt="Notebook" style={{ width: '20%', alignSelf: 'center', cursor: 'pointer' }} />
                {/* txt */}
                <Box>
                  <Box dir="rtl">
                    <Typography variant="h6">كلمات غريبة غير مفهومة غرضها اظهار لطاقة التصميم</Typography>
                    <Typography variant="h5">هل عاد حمودة من جديد؟</Typography>
                    <Typography variant="body1">شائعات منتشرة وحمودة لن أعود ابداً</Typography>
                  </Box>
                </Box>
              </Stack>
              {/* txt section end */}
            </Stack>
            {/* top end */}
          </Box>
          {/* box 2 in the right section */}
          <Box flex={1}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <img
                src={MainLeftBottom}
                alt="Notebook"
                style={{ width: '100%', backgroundSize: 'cover', filter: 'brightness(0.5)' }}
              />
              {/* txt section */}
              <Stack
                direction="Column"
                justifyContent="space-between"
                style={{ position: 'absolute', height: '94%', width: '95%' }}
              >
                <Stack direction="row" justifyContent="end" alignItems="top" gap={1}>
                  {/* <Box id="padge_Black">
                    <Typography variant="body1">حصرياً</Typography>
                  </Box> */}
                  <Chip
                    label="حصرياً"
                    as="overline"
                    onClick={() => console.log('clicked')}
                    style={{ background: 'black', color: 'white', width: '5rem' }}
                  />
                  <Chip
                    label="فيديو"
                    as="overline"
                    onClick={() => console.log('clicked')}
                    style={{ background: 'red', color: 'white', width: '5rem' }}
                  />
                  {/* <Box id="padge_Red">
                    <Typography variant="h6">فيديو</Typography>
                  </Box> */}
                </Stack>
                {/* icon */}
                <img src={videoPlay} alt="Notebook" style={{ width: '20%', alignSelf: 'center', cursor: 'pointer' }} />
                {/* txt */}
                <Box>
                  <Box dir="rtl">
                    <Typography variant="h6">كلمات غريبة غير مفهومة غرضها اظهار لطاقة التصميم</Typography>
                    <Typography variant="h5">هل عاد حمودة من جديد؟</Typography>
                    <Typography variant="body1">شائعات منتشرة وحمودة لن أعود ابداً</Typography>
                  </Box>
                </Box>
              </Stack>
              {/* txt section end */}
            </Stack>
            {/* top end */}
          </Box>
        </Stack>
      </Box>
      {/* right section */}
      <Box flex={100} style={{ color: 'white' }}>
        <Stack direction="Column" gap={1}>
          <Box>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              style={{ position: 'relative', cursor: 'pointer' }}
            >
              <img
                src={MainRightTop}
                alt="Notebook"
                style={{ width: '100%', backgroundSize: 'cover' }}
              />
              <ShadowBox></ShadowBox>
              {/* txt section */}
              <Stack
                direction="Column"
                justifyContent="flex-end"
                style={{ position: 'absolute', height: '94%', width: '95%', zIndex:'33' }}
              >
                <Box>
                  <Box dir="rtl">
                    <Typography variant="h4"> الخليفة المأمون يعود ليلعب بالزمالك...ـ</Typography>
                    <Typography variant="h5">
                      إنطلاقة مهمة جداً للنادي يجب عليك قرأتها والفوز 2-1 لصالح الزمالك
                    </Typography>
                  </Box>
                </Box>
              </Stack>
              {/* txt section end */}
            </Stack>
            {/* top end */}
          </Box>
          <Box>
            <Stack direction="row" gap={1}>
              <Box flex={1}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  <img
                    src={MainLeftTop}
                    alt="Notebook"
                    style={{ width: '100%', backgroundSize: 'cover', filter: 'brightness(0.5)' }}
                  />
                  {/* txt section */}
                  <Stack
                    direction="Column"
                    justifyContent="space-between"
                    style={{ position: 'absolute', height: '94%', width: '95%' }}
                  >
                    <Stack direction="row" justifyContent="end" alignItems="top" gap={1}>
                      <Chip
                        label="حصرياً"
                        as="overline"
                        onClick={() => console.log('clicked')}
                        style={{ background: 'black', color: 'white', width: '5rem' }}
                      />
                      <Chip
                        label="فيديو"
                        as="overline"
                        onClick={() => console.log('clicked')}
                        style={{ background: 'red', color: 'white', width: '5rem' }}
                      />
                    </Stack>

                    {/* txt */}
                    <Box>
                      <Box dir="rtl">
                        <Typography variant="body2">كلمات غريبة غير مفهومة غرضها اظهار لطاقة التصميم</Typography>
                        <Typography variant="h6">هل عاد حمودة من جديد؟</Typography>
                        <Typography variant="body1">شائعات منتشرة وحمودة لن أعود ابداً</Typography>
                      </Box>
                    </Box>
                  </Stack>
                  {/* txt section end */}
                </Stack>
                {/* top end */}
              </Box>
              <Box flex={1}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  <img
                    src={MainLeftTop}
                    alt="Notebook"
                    style={{ width: '100%', backgroundSize: 'cover', filter: 'brightness(0.5)' }}
                  />
                  {/* txt section */}
                  <Stack
                    direction="Column"
                    justifyContent="space-between"
                    style={{ position: 'absolute', height: '94%', width: '95%' }}
                  >
                    <Stack direction="row" justifyContent="end" alignItems="top" gap={1}>
                      <Chip
                        label="حصرياً"
                        as="overline"
                        onClick={() => console.log('clicked')}
                        style={{ background: 'black', color: 'white', width: '5rem' }}
                      />
                      <Chip
                        label="فيديو"
                        as="overline"
                        onClick={() => console.log('clicked')}
                        style={{ background: 'red', color: 'white', width: '5rem' }}
                      />
                    </Stack>

                    {/* txt */}
                    <Box>
                      <Box dir="rtl">
                        <Typography variant="body2">كلمات غريبة غير مفهومة غرضها اظهار لطاقة التصميم</Typography>
                        <Typography variant="h6">هل عاد حمودة من جديد؟</Typography>
                        <Typography variant="body1">شائعات منتشرة وحمودة لن أعود ابداً</Typography>
                      </Box>
                    </Box>
                  </Stack>
                  {/* txt section end */}
                </Stack>
                {/* top end */}
              </Box>
              <Box flex={1}>
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="center"
                  style={{ position: 'relative', cursor: 'pointer' }}
                >
                  <img
                    src={MainLeftTop}
                    alt="Notebook"
                    style={{ width: '100%', backgroundSize: 'cover', filter: 'brightness(0.5)' }}
                  />
                  {/* txt section */}
                  <Stack
                    direction="Column"
                    justifyContent="space-between"
                    style={{ position: 'absolute', height: '94%', width: '95%' }}
                  >
                    <Stack direction="row" justifyContent="end" alignItems="top" gap={1}>
                      <Chip
                        label="حصرياً"
                        as="overline"
                        onClick={() => console.log('clicked')}
                        style={{ background: 'black', color: 'white', width: '5rem' }}
                      />
                      <Chip
                        label="فيديو"
                        as="overline"
                        onClick={() => console.log('clicked')}
                        style={{ background: 'red', color: 'white', width: '5rem' }}
                      />
                    </Stack>

                    {/* txt */}
                    <Box>
                      <Box dir="rtl">
                        <Typography variant="body2">كلمات غريبة غير مفهومة غرضها اظهار لطاقة التصميم</Typography>
                        <Typography variant="h6">هل عاد حمودة من جديد؟</Typography>
                        <Typography variant="body1">شائعات منتشرة وحمودة لن أعود ابداً</Typography>
                      </Box>
                    </Box>
                  </Stack>
                  {/* txt section end */}
                </Stack>
                {/* top end */}
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Box>
      {/* end of the right section */}
    </Stack>
  );
};
