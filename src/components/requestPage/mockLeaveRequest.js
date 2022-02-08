const mockLeaveRequest = [
  // First
  {
    leavePolicy: {
      leaveName: 'Replacement Leave dsadsakldmskdl sjndasldjslkassss',
    },
    employee: {
      name: 'John Doe',
      employee_no: 420,
    },
    startDate: '2022-01-28',
    endDate: '2022-02-04',
    duration: 8,
    status: 'APPROVED',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p',
    document: 'leaveUpload.pdf',
    approval: {
      first_approval: 'Zhafri',
      first_approval_status: 'APPROVED',
      first_approval_timestamp: '2022-01-28 4.20pm',
      second_approval: 'Vincent',
      second_approval_status: 'APPROVED',
      second_approval_timestamp: '2022-01-28 4.20pm',
      third_approval: 'Nabilah',
      third_approval_status: 'APPROVED',
      third_approval_timestamp: '2022-01-28 4.20pm',
    },
    createdAt: '2022-01-28 1.20pm',
    updatedAt: '2022-01-28 4.20pm',
  },
  // Second
  {
    leavePolicy: {
      leaveName: 'Annual Leave',
    },
    employee: {
      name: 'John Doe',
      employee_no: 420,
    },
    startDate: '2022-02-03',
    endDate: '2022-02-03',
    duration: 1,
    status: 'APPROVED',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p',
    document: 'leaveUpload.pdf',
    approval: {
      first_approval: 'Vincent',
      first_approval_status: 'APPROVED',
      first_approval_timestamp: '2022-01-28 4.20pm',
      second_approval: 'Nabilah',
      second_approval_status: 'APPROVED',
      second_approval_timestamp: '2022-01-28 4.20pm',
      third_approval: null,
      third_approval_status: null,
      third_approval_timestamp: null,
    },
    createdAt: '2022-01-28 1.20pm',
    updatedAt: '2022-01-28 4.20pm',
  },
  // Third
  {
    leavePolicy: {
      leaveName: 'Medical Leave',
    },
    employee: {
      name: 'John Doe',
      employee_no: 420,
    },
    startDate: '2022-02-07',
    endDate: '2022-02-08',
    duration: 2,
    status: 'PENDING',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p',
    document: 'leaveUpload.pdf',
    approval: {
      first_approval: 'Zhafri',
      first_approval_status: 'PENDING',
      first_approval_timestamp: '2022-01-28 4.20pm',
      second_approval: 'Vincent',
      second_approval_status: 'PENDING',
      second_approval_timestamp: '2022-01-28 4.20pm',
      third_approval: 'Nabilah',
      third_approval_status: 'PENDING',
      third_approval_timestamp: '2022-01-28 4.20pm',
    },
    createdAt: '2022-01-28 1.20pm',
    updatedAt: '2022-01-28 4.20pm',
  },
  // Fourth
  {
    leavePolicy: {
      leaveName: 'Annual Leave',
    },
    employee: {
      name: 'John Doe',
      employee_no: 420,
    },
    startDate: '2022-02-07',
    endDate: '2022-02-08',
    duration: 2,
    status: 'PENDING',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p',
    document: 'leaveUpload.pdf',
    approval: {
      first_approval: 'Zhafri',
      first_approval_status: 'APPROVED',
      first_approval_timestamp: '2022-01-28 4.20pm',
      second_approval: 'Vincent',
      second_approval_status: 'APPROVED',
      second_approval_timestamp: '2022-01-28 4.20pm',
      third_approval: 'Nabilah',
      third_approval_status: 'PENDING',
      third_approval_timestamp: '2022-01-28 4.20pm',
    },
    createdAt: '2022-01-28 1.20pm',
    updatedAt: '2022-01-28 4.20pm',
  },
  // Fifth
  {
    leavePolicy: {
      leaveName: 'Compassionate Leave',
    },
    employee: {
      name: 'John Doe',
      employee_no: 420,
    },
    startDate: '2022-02-9',
    endDate: '2022-02-11',
    duration: 3,
    status: 'REJECTED',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p',
    document: 'leaveUpload.pdf',
    approval: {
      first_approval: 'Zhafri',
      first_approval_status: 'APPROVED',
      first_approval_timestamp: '2022-01-28 4.20pm',
      second_approval: 'Vincent',
      second_approval_status: 'APPROVED',
      second_approval_timestamp: '2022-01-28 4.20pm',
      third_approval: 'Nabilah',
      third_approval_status: 'REJECTED',
      third_approval_timestamp: '2022-01-28 4.20pm',
    },
    createdAt: '2022-01-28 1.20pm',
    updatedAt: '2022-01-28 4.20pm',
  },
  // Sixth
  {
    leavePolicy: {
      leaveName: 'Annual Leave',
    },
    employee: {
      name: 'John Doe',
      employee_no: 420,
    },
    startDate: '2022-02-15',
    endDate: '2022-02-19',
    duration: 5,
    status: 'WITHDRAWN',
    description:
      'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis p',
    document: 'leaveUpload.pdf',
    approval: {
      first_approval: 'Zhafri',
      first_approval_status: 'APPROVED',
      first_approval_timestamp: '2022-01-28 4.20pm',
      second_approval: 'Vincent',
      second_approval_status: 'PENDING',
      second_approval_timestamp: '2022-01-28 4.20pm',
      third_approval: null,
      third_approval_status: null,
      third_approval_timestamp: null,
    },
    createdAt: '2022-01-28 1.20pm',
    updatedAt: '2022-01-28 4.20pm',
  },
];

export default mockLeaveRequest;
