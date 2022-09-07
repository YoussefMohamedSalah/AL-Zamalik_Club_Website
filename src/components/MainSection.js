import React from 'react';
import Mortada from '../assets/Mortada.jpg';
import { Box, Stack, Typography } from '@mui/material';


// const clipForMainRight = { padding:{lg:'4rem 0rem 0rem 10rem', xs:'1rem'},
// const clipForMainLeft = { padding:{lg:'5rem 3rem 10rem 0rem', xs:'1rem'};

export const MainSection = ({ Dir, txtDir, imgDir, sxImage }) => {
  return (
    <Stack
      direction="row"
      alignItems="top"
      justifyContent="space-between"
      dir={Dir}
      sx={{ minHeight: { lg: '100%' }, display: { lg: 'flex', xs: 'contents' } }}
    >
      <Box sx={sxImage} flex={1}>
        <img src={Mortada} alt="mortada masour"  />
      </Box>
      <Box flex={1} >
      <Stack
        sx={{padding:{lg:'2rem' , sm:'1rem', md:'1rem', xs:'1rem'}}}
        direction="column"
        gap={1}
        // style={Dir === 'rtl' ? { padding:'4rem 0rem 0rem 10rem'} : { padding:'5rem 3rem 10rem 0rem'}}
      >
        <Typography variant="h4" dir={txtDir}>
          مرتضي منصور
        </Typography>
        <Typography variant="h6" fontWeight={500} dir={txtDir}>
          كان منصور عضوًا في مجلس النواب المصري مرتين. الأولى كانت في العام 2000 حيث استمر فيه حتى العام 2005، والثانية
          كانت في العام 2015، حيث استمر فيه حتى العام 2020.رياضيًا، كان منصور رئيسًا لنادي نادي الزمالك لفترة وجيزة في
          العامين 2005 و2006 وكذلك مرة أخرى منذ العام 2014 حتى الآن خلال مباراة في الدوري المصري الممتاز بين نادي
          الإسماعيلي ونادي الاتحاد السكندري اندلع شغب بالمباراة ثم تبادل الجميع الإتهامات. الإتهام الأكبر كان للاعب شهير
          لعب حينها للنادي الإسماعيلي والإدانة تحوط به من كل جانب فما كان بمنصور، حين كان حديث عهد بالمهنة وكيلًا للنائب
          العام المصري، إلا أن قرر حبس اللاعب أربعة أيام على ذمة التحقيق مع مراعاة التجديد طبقًا لسير التحقيقات بدلًا من
          تفادي التصادم مع راعي النادي الإسماعيلي عثمان أحمد عثمان صهر الرئيس المصري أنور السادات
        </Typography>
        <Stack direction="column">
          <Typography variant="h5" dir={txtDir}>
            رئيس مجلس الإدارة{' '}
          </Typography>
          <Typography variant="subtitle1" dir={txtDir}>
            <span style={{ color: 'red' }}>من </span>2002 <span style={{ color: 'red' }}>الي</span> 2030
          </Typography>
        </Stack>
      </Stack>
      </Box>
    </Stack>
  );
};
