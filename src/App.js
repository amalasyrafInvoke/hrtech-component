import { Routes, Route, Navigate } from 'react-router-dom';
// import BookingCalendar from './components/bookingCalendar';
import Dashboard from './components/dashboard';
import Homepage from './components/dashboard/homepage';
import InnerDashboard from './components/dashboard/innerDashboard';
import dashboardItems from './components/dashboard/dashboardItems';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />}>
        {dashboardItems.map((item) => {
          if (item.items) {
            return (
              <Route
                path={item.link}
                element={<InnerDashboard parent={item.link} />}
              >
                <Route index element={<Navigate to='dashboard' />} />

                {item.items.map((item) => (
                  <Route path={item.link} element={<Homepage />} />
                ))}
              </Route>
            );
          }

          return (
            <>
              <Route index element={<Navigate to='homepage' />} />
              <Route path='homepage' element={<Homepage />} />
            </>
          );
        })}

        {/* <Route index element={<Navigate to='homepage' />} />
        <Route path='homepage' element={<Homepage />} />
        <Route
          path='recruitment'
          element={<InnerDashboard parent='/recruitment' />}
        >
          <Route index element={<Navigate to='dashboard' />} />
          <Route path='dashboard' element={<Homepage />} />
        </Route>

        <Route path='payroll' element={<InnerDashboard parent='/payroll' />}>
          <Route index element={<Homepage />} />
        </Route>
        <Route path='leave' element={<InnerDashboard parent='/leave' />} />
        <Route path='claim' element={<InnerDashboard parent='/claim' />} />
        <Route
          path='performance'
          element={<InnerDashboard parent='/performance' />}
        />
        <Route
          path='settings'
          element={<InnerDashboard parent='/settings' />}
        />
        <Route path='support' element={<InnerDashboard parent='/support' />} /> */}
      </Route>
    </Routes>
  );
}

export default App;
