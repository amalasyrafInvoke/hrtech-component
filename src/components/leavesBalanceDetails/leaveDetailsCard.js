import React from 'react';
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function LeaveDetailsCard({ detailsType }) {
  if (detailsType === 'ENTITLEMENT') {
    return (
      <Box
        sx={{
          border: '1px solid lightgray',
          width: '90%',
          m: 4,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Entitlement
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='p'>Current Cycle Entitlement</Typography>
          <Typography variant='p' sx={{ textAlign: 'left' }}>
            14.00 days
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='p'>Replacement Credit</Typography>
          <Typography variant='p' sx={{ textAlign: 'left' }}>
            1.00 days
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='p'>Expired Replacement Credit</Typography>
          <Typography variant='p' sx={{ textAlign: 'left' }}>
            0.00 days
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='p'>
            Carry Forward (from previous cycle)
          </Typography>
          <Typography variant='p' sx={{ textAlign: 'left' }}>
            1.00 days
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='p'>Expired Carry Forward</Typography>
          <Typography variant='p' sx={{ textAlign: 'left' }}>
            0.00 days
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Total Entitlement
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            16.00 days
          </Typography>
        </Box>
      </Box>
    );
  }

  if (detailsType === 'DEDUCTION') {
    return (
      <Box
        sx={{
          border: '1px solid lightgray',
          width: '90%',
          m: 4,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Deduction
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Accordion
            elevation={0}
            disableGutters
            sx={{
              width: '100%',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowForwardIosIcon sx={{ fontSize: '16px' }} />}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(90deg)',
                },
                '& .MuiAccordionSummary-content': {
                  marginLeft: 2,
                  fontWeight: 'bold',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='p'>Utilized</Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Current Cycle Entitlement
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Replacement Credit
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Carry Forward
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Accordion
            elevation={0}
            disableGutters
            sx={{
              width: '100%',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowForwardIosIcon sx={{ fontSize: '16px' }} />}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(90deg)',
                },
                '& .MuiAccordionSummary-content': {
                  marginLeft: 2,
                  fontWeight: 'bold',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='p'>Planned Leave</Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Current Cycle Entitlement
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Replacement Credit
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Carry Forward
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          <Accordion
            elevation={0}
            disableGutters
            sx={{
              width: '100%',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowForwardIosIcon sx={{ fontSize: '16px' }} />}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(90deg)',
                },
                '& .MuiAccordionSummary-content': {
                  marginLeft: 2,
                  fontWeight: 'bold',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='p'>Pending Approval</Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  5.00 days
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Current Cycle Entitlement
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  5.00 days
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Replacement Credit
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  0.00 days
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Carry Forward
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  0.00 days
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Accordion
            elevation={0}
            disableGutters
            sx={{
              width: '100%',
              '&:before': {
                display: 'none',
              },
            }}
          >
            <AccordionSummary
              expandIcon={<ArrowForwardIosIcon sx={{ fontSize: '16px' }} />}
              sx={{
                display: 'flex',
                flexDirection: 'row-reverse',
                alignItems: 'center',
                '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                  transform: 'rotate(90deg)',
                },
                '& .MuiAccordionSummary-content': {
                  marginLeft: 2,
                  fontWeight: 'bold',
                },
              }}
            >
              <Box
                sx={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='p'>Forfeited</Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
            </AccordionSummary>
            <AccordionDetails>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Replacement Credit
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  my: 0.5,
                }}
              >
                <Typography variant='p' sx={{ px: 4 }}>
                  Carry Forward
                </Typography>
                <Typography variant='p' sx={{ textAlign: 'left' }}>
                  1.00 days
                </Typography>
              </Box>
            </AccordionDetails>
          </Accordion>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Total Deduction
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            6.00 days
          </Typography>
        </Box>
      </Box>
    );
  }

  if (detailsType === 'BALANCE') {
    return (
      <Box
        sx={{
          border: '1px solid lightgray',
          width: '90%',
          m: 4,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Balance
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='p'>Current Cycle Entitlement</Typography>
          <Typography variant='p' sx={{ textAlign: 'left' }}>
            14.00 days
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='p'>Replacement Credit</Typography>
          <Typography variant='p' sx={{ textAlign: 'left' }}>
            1.00 days
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='p'>Carry Forward</Typography>
          <Typography variant='p' sx={{ textAlign: 'left' }}>
            1.00 days
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            Effective Balance
          </Typography>
          <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
            16.00 days
          </Typography>
        </Box>
      </Box>
    );
  }

  if (detailsType === 'LIMIT') {
    return (
      <Box
        sx={{
          border: '1px solid lightgray',
          width: '90%',
          m: 4,
          p: 4,
          borderRadius: 4,
        }}
      >
        <Typography variant='h5' sx={{ fontWeight: 'bold' }}>
          Limit Per Cycle
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Typography variant='p'>Replacement Credit</Typography>
          <Typography variant='p' sx={{ textAlign: 'left' }}>
            No limit
          </Typography>
        </Box>
        <Box
          sx={{
            width: '100%',
            height: '25px',
          }}
        />
      </Box>
    );
  }

  return null;
}
