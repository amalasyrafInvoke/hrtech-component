import React, { useEffect, useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import moment from 'moment';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ApprovalIcons from './approvalIcons';
import ActionConfirmation from '../screens/actionConfirmation/index';

export default function LeaveRequestCard({ item }) {
  const [approvalArr, setApprovalArr] = useState([]);
  const [openWithdrawDialog, setOpenWithdrawDialog] = useState(false);

  const toggleWithdrawDialog = () => {
    setOpenWithdrawDialog(!openWithdrawDialog);
  };

  useEffect(() => {
    let testArr = [];
    if (item.approval['first_approval']) {
      let test = {
        approver: item.approval['first_approval'],
        status: item.approval['first_approval_status'],
        time: item.approval['first_approval_timestamp'],
      };
      testArr.push(test);
    }
    if (item.approval['second_approval']) {
      let test = {
        approver: item.approval['second_approval'],
        status: item.approval['second_approval_status'],
        time: item.approval['second_approval_timestamp'],
      };
      testArr.push(test);
    }
    if (item.approval['third_approval']) {
      let test = {
        approver: item.approval['third_approval'],
        status: item.approval['third_approval_status'],
        time: item.approval['third_approval_timestamp'],
      };
      testArr.push(test);
    }
    setApprovalArr(testArr);
  }, [item]);

  return (
    <Box
      sx={{
        width: '100%',
        height: '100px',
        py: 2,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {/* Request Details */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '250px',
          minWidth: '250px',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#E4E4E4',
            p: 1,
            mr: 2,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <FolderOpenIcon sx={{ color: '#8D9593' }} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Typography
            variant='p'
            sx={{ fontWeight: 'bold', color: 'lightseagreen' }}
          >
            {item.leavePolicy.leaveName}
          </Typography>
          <Typography variant='p' sx={{ color: '#8D9593', fontSize: '0.8rem' }}>
            {`${moment(item.startDate).format('D MMM YYYY')} - ${moment(
              item.endDate
            ).format('D MMM YYYY')}`}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          width: '150px',
          minWidth: '150px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='p' sx={{ color: '#8D9593', fontWeight: 'bold' }}>
          {item.duration}
        </Typography>
      </Box>

      <Box
        sx={{
          width: '200px',
          minWidth: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant='p' sx={{ color: '#8D9593' }}>
          {item.status}
        </Typography>
      </Box>
      <Box
        sx={{
          width: '200px',
          minWidth: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        {approvalArr.map((arr) => (
          <ApprovalIcons
            approver={arr.approver}
            status={arr.status}
            time={arr.time}
          />
        ))}
      </Box>
      <Box
        sx={{
          width: '200px',
          minWidth: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <VisibilityIcon sx={{ mx: 1, color: 'lightseagreen' }} />
        <Button
          variant='outlined'
          onClick={toggleWithdrawDialog}
          sx={{
            color: 'lightseagreen',
            borderColor: 'lightseagreen',
            mx: 1,
            px: 2,
            '&:hover': {
              borderColor: 'lightseagreen',
            },
          }}
        >
          Withdraw
        </Button>
        <ActionConfirmation
          open={openWithdrawDialog}
          toggleDialog={toggleWithdrawDialog}
          text='Are you sure you want to withdraw this request?'
        />
      </Box>
    </Box>
  );
}
