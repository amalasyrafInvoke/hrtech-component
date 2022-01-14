import { Routes, Route, Navigate } from 'react-router-dom';
// import BookingCalendar from './components/bookingCalendar';
import Dashboard from './components/dashboard';
import Homepage from './components/dashboard/homepage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        <Route path='/' element={<Navigate to='homepage' />} />
        <Route path='homepage' element={<Homepage />} />
        <Route path='recruitment' element={<Homepage />} />
        <Route path='payroll' element={<Homepage />} />
        <Route path='leave' element={<Homepage />} />
        <Route path='claim' element={<Homepage />} />
        <Route path='performance' element={<Homepage />} />
        <Route path='settings' element={<Homepage />} />
        <Route path='support' element={<Homepage />} />
      </Route>
    </Routes>
  );
}

export default App;
