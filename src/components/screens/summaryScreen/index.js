import React from 'react';
import { Box, Typography, Container, Divider } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

export const entitlementData = {
  year: 2022,
  fullAmount: 15,
  balance: 8,
  employee: {
    name: 'John Doe',
    employee_no: 420,
    status: 'ACTIVE',
    joined_date: new Date('2021-09-06'),
  },
  leaveDetails: {
    leave_name: 'Work From Home',
    leave_abbr: 'WFH',
    leave_color: 'royalblue',
    leave_icon: null,
  },
};

export const applicationSummary = {
  name: 'John Doe',
  leave_type: 'Work From Home',
  description: 'Work From Home - Assigned by Vincent',
  uploaded_document: 'wfh.pdf',
  from: '2022-01-26',
  to: '2022-01-28',
};

const ListObject = ({ objKey, value }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        color: 'white',
      }}
    >
      <Typography variant='p'>{objKey} :</Typography>
      <Typography variant='p' sx={{ maxWidth: '50%', textAlign: 'right' }}>
        {value}
      </Typography>
    </Box>
  );
};

const SummaryList = ({ applicationSummary }) => {
  return (
    <Box sx={{ height: '100%', width: '50%' }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          height: '100%',
          width: '100%',
        }}
      >
        {Object.entries(applicationSummary).map((arr) => (
          <ListObject objKey={arr[0]} value={arr[1]} />
        ))}
      </Box>
    </Box>
  );
};

const SummaryCard = ({ entitlementData }) => {
  const { leaveDetails } = entitlementData;
  return (
    <Box
      sx={{
        backgroundColor: 'whitesmoke',
        width: '300px',
        height: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 4,
      }}
    >
      <Box
        sx={{
          padding: 1,
          backgroundColor: leaveDetails.leave_color,
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='p' sx={{ color: 'white' }}>
          {leaveDetails.leave_abbr}
        </Typography>
      </Box>
      <Typography variant='p' sx={{ my: 1 }}>
        {leaveDetails.leave_name}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-evenly',
          width: '100%',
          my: 1,
        }}
      >
        <Box
          sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
        >
          <Typography variant='p' sx={{ color: 'lightseagreen' }}>
            Available
          </Typography>
          <Typography variant='p'>{entitlementData.balance} days</Typography>
        </Box>
        <Divider orientation='vertical' variant='middle' flexItem />
        <Box
          sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
        >
          <Typography variant='p' sx={{ color: 'lightseagreen' }}>
            All
          </Typography>
          <Typography variant='p'>{entitlementData.fullAmount} days</Typography>
        </Box>
        <Divider orientation='vertical' variant='middle' flexItem />
        <Box
          sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
        >
          <Typography variant='p' sx={{ color: 'lightseagreen' }}>
            Used
          </Typography>
          <Typography variant='p' sx={{ color: 'red' }}>
            {entitlementData.fullAmount - entitlementData.balance} days
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default function SummaryScreen({ entitlementData, applicationSummary }) {
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
        <Typography
          variant='h4'
          sx={{ color: 'white', fontWeight: 'bold', mb: 2 }}
        >
          Request Confirmation
        </Typography>
        <CheckCircleOutlineIcon
          sx={{
            width: 70,
            height: 70,
            color: 'whitesmoke',
          }}
        />
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            my: 4,
            height: 3 / 5,
            width: 3 / 5,
          }}
        >
          <SummaryList applicationSummary={applicationSummary} />
          <SummaryCard entitlementData={entitlementData} />
        </Box>
      </Box>
    </Container>
  );
}
