import React from 'react';
import { Container, Box, Typography, Button } from '@mui/material';
import { keyframes } from '@emotion/react';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const iconAnimation = keyframes`
0% {
  transform: rotate(0deg)
  translateY(-100px)
}
25% {
  transform: rotate(-45deg), 
  translateY(100px)
}
50% {
  transform: rotate(-270deg);
}
100% {
  transform: rotate(-360deg);
}
`;

const textAnimation = keyframes`
0% {
  opacity: 0
}
100% {
  opacity: 1
}
`;

export default function SuccessfulScreen({
  text = 'Successful !',
  additionalText,
}) {
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
        <CheckCircleOutlineIcon
          sx={{
            width: 70,
            height: 70,
            color: 'whitesmoke',
            animation: `${iconAnimation} 750ms linear 1`,
          }}
        />
        <Box
          sx={{
            marginTop: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            animation: `${textAnimation} 500ms linear 250ms 1 backwards`,
          }}
        >
          <SuccessfulText text={text}>{additionalText}</SuccessfulText>
        </Box>
      </Box>
    </Container>
  );
}

const SuccessfulText = ({ text, children }) => {
  return (
    <>
      <Typography variant='h5' sx={{ color: 'white', fontWeight: 'bold' }}>
        {text}
      </Typography>
      {children}
    </>
  );
};

export const ExampleAdditionalText = () => {
  return (
    <>
      <Typography variant='p' sx={{ color: 'white' }}>
        Would you like to create new employee or skip instead
      </Typography>
      <Box sx={{ width: '100%', my: 2 }}>
        <Button
          variant='contained'
          sx={[
            {
              backgroundColor: 'white',
              color: 'lightseagreen',
              width: 'calc(50% - 10px)',
              mx: '5px',
              p: 1,
            },
            {
              '&:hover': {
                opacity: '0.85',
                backgroundColor: 'white',
              },
            },
          ]}
        >
          Create Employee
        </Button>
        <Button
          variant='contained'
          sx={[
            {
              backgroundColor: '#fcd94e',
              color: 'white',
              width: 'calc(50% - 10px)',
              mx: '5px',
              p: 1,
            },
            {
              '&:hover': {
                opacity: '0.85',
                backgroundColor: '#fcd94e',
              },
            },
          ]}
        >
          Skip
        </Button>
      </Box>
    </>
  );
};
