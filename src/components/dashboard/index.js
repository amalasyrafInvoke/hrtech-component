import { Routes, Route, Navigate } from 'react-router-dom';
import OuterDashboard from './outerDashboard';
import Homepage from './homepage';
import InnerDashboard from './innerDashboard';
import dashboardItems from './dashboardItems';

function Dashboard() {
  return (
    <Routes>
      <Route path='/' element={<OuterDashboard />}>
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
      </Route>
    </Routes>
  );
}

export default Dashboard;
