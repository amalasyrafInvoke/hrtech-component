import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { keyframes } from '@emotion/react';
import AdnexioLogo from '../../../resources/images/adnexio-logo.png';
import LoopIcon from '@mui/icons-material/Loop';

const iconRotate = keyframes`
0% {
  transform: rotate(0deg)
}
25% {
  transform: rotate(-90deg)
}
50% {
  transform: rotate(-180deg);
}
100% {
  transform: rotate(-360deg);
}
`;

export default function LoadingScreen({ loadingText = 'Loading' }) {
  return (
    <Container
      maxWidth='false'
      sx={{ bgcolor: 'lightseagreen', height: '100vh' }}
      disableGutters
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }}
      >
        <img src={AdnexioLogo} alt='Adnexio Logo' width={250} height={125} />
        <LoopIcon
          sx={{
            width: 70,
            height: 70,
            color: 'whitesmoke',
            animation: `${iconRotate} 2000ms linear infinite alternate`,
          }}
        />
        <Box sx={{ marginTop: '2rem' }}>
          <Typography variant='p' sx={{ color: 'white' }}>
            {`${loadingText} ...`}
          </Typography>
        </Box>
      </Box>
    </Container>
  );
}
