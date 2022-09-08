import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import slide1 from '../assets/slide1 (1).png';
import slide2 from '../assets/slide1 (2).png';
import slide3 from '../assets/slide1 (3).png';
import slide4 from '../assets/slide1 (4).png';
import './imagesGroupStyles.css';

export const ImagesGroup = () => {
  return (
    <Box style={{ height: '70vh', width: '100%', color:'white', position:'relative' }}>
    <Stack  direction="row"
 
    id="mainPanerContainer" className="d-flex w-100">
      <Box id="num1" >
        <img src={slide3} alt="slide" />
        <Box  className="slide-text-div" sx={{ left: '-3%', top: '81%', height: '25%', position:'absolute', zIndex:'9999' }}>
          <Typography variant='body1' sx={{ zIndex: '100' }}>نص تجريبي كده ملهوش أي تلاتين لازمة للتصميم</Typography>
          <Typography variant='h5' sx={{ zIndex: '100' }}>احمد هاني جاي تاني </Typography>
        </Box>
      </Box>
      <Box id="num2">
        <img src={slide4} alt="slide" />
        <Box  className="slide-text-div" sx={{ left: '15%', top: '81%', position:'absolute', zIndex:'9999' }}>
          <Typography variant='body1' sx={{ zIndex: '100' }}>نص تجريبي كده ملهوش أي تلاتين لازمة للتصميم</Typography>
          <Typography variant='h5' sx={{ zIndex: '100' }}>مرتضي منصور يقول</Typography>
        </Box>
      </Box>
      <Box id="num3">
        <img src={slide2} alt="slide" />
        <Box sx={{position:'absolute'}} className="slide-text-div" style={{ left: '32%', top: '81%' }}>
          <Typography variant='body1' sx={{ zIndex: '100' }}>نص تجريبي كده ملهوش أي تلاتين لازمة للتصميم</Typography>
          <Typography variant='h5' sx={{ zIndex: '100' }}>جمهور نادي الزمالك</Typography>
        </Box>
      </Box>
      <Box id="num4">
        <img src={slide1} alt="slide" />
        <Box
        sx={{position:'absolute'}}
          className="slide-text-div"
          style={{
            left: '77%',
            top: '76%',
          }}
        >
          <Typography variant='body1' sx={{ zIndex: '100' }}>5-1 لنادي الزمالك بمنتهي السهولة بالفيديو</Typography>
          <Typography variant='h5' sx={{ zIndex: '100' }}>الفوز الساحق للزمالك على النادي النرويجي بمنتهي السهولة ... ـ</Typography>
        </Box>
      </Box>
      <Box id="num5">
        <img src={slide2} alt="slide" />
        <Box sx={{position:'absolute'}} className="slide-text-div" style={{ left: '51%', top: '81%' }}>
          <Typography variant='body1' sx={{ zIndex: '100' }}>نص تجريبي كده ملهوش أي تلاتين لازمة للتصميم</Typography>
          <Typography variant='h5' sx={{ zIndex: '100' }}>جمهور نادي الزمالك</Typography>
        </Box>
      </Box>
    </Stack>
  </Box>
    // -----------------------------------
  );
};

// <Box style={{ height: '70vh', width: '100%' }}>
//       <Stack  direction="row"
   
//       id="mainPanerContainer" className="d-flex w-100">
//         <Box id="num1">
//           <img src={slide3} alt="slide" />
//           <Box  className="slide-text-div" sx={{ left: '-10%', top: '67%', height: '25%', position:'absolute', zIndex:'9999' }}>
//             <Typography variant='body1' sx={{ zIndex: '100' }}>نص تجريبي كده ملهوش أي تلاتين لازمة للتصميم</Typography>
//             <Typography variant='h5' sx={{ zIndex: '100' }}>احمد هاني جاي تاني </Typography>
//           </Box>
//         </Box>
//         <Box id="num2">
//           <img src={slide4} alt="slide" />
//           <Box  className="slide-text-div" sx={{ left: '9%', top: '67%', position:'absolute', zIndex:'9999' }}>
//             <Typography variant='body1' sx={{ zIndex: '100' }}>نص تجريبي كده ملهوش أي تلاتين لازمة للتصميم</Typography>
//             <Typography variant='h5' sx={{ zIndex: '100' }}>مرتضي منصور يقول</Typography>
//           </Box>
//         </Box>
//         <Box id="num3">
//           <img src={slide2} alt="slide" />
//           <Box sx={{position:'absolute'}} className="slide-text-div" style={{ left: '27%', top: '67%' }}>
//             <Typography variant='body1' sx={{ zIndex: '100' }}>نص تجريبي كده ملهوش أي تلاتين لازمة للتصميم</Typography>
//             <Typography variant='h5' sx={{ zIndex: '100' }}>جمهور نادي الزمالك</Typography>
//           </Box>
//         </Box>
//         <Box id="num4">
//           <img src={slide1} alt="slide" />
//           <Box
//           sx={{position:'absolute'}}
//             className="slide-text-div"
//             style={{
//               left: '72%',
//               top: '67%',
//             }}
//           >
//             <Typography variant='body1' sx={{ zIndex: '100' }}>5-1 لنادي الزمالك بمنتهي السهولة بالفيديو</Typography>
//             <Typography variant='h5' sx={{ zIndex: '100' }}>الفوز الساحق للزمالك على النادي النرويجي بمنتهي السهولة ... ـ</Typography>
//           </Box>
//         </Box>
//         <Box id="num5">
//           <img src={slide2} alt="slide" />
//           <Box sx={{position:'absolute'}} className="slide-text-div" style={{ left: '44%', top: '67%' }}>
//             <Typography variant='body1' sx={{ zIndex: '100' }}>نص تجريبي كده ملهوش أي تلاتين لازمة للتصميم</Typography>
//             <Typography variant='h5' sx={{ zIndex: '100' }}>جمهور نادي الزمالك</Typography>
//           </Box>
//         </Box>
//       </Stack>
//     </Box>