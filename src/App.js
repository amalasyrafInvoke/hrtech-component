// import FullCalendar from './components/fullCalendar';
// import DashboardWrapper from './components/dashboard';
// import LoadingScreen from './components/screens/loadingScreen';
// import SuccessfulScreen, {
//   ExampleAdditionalText,
// } from './components/screens/successfulScreen';
import SummaryScreen, { entitlementData, applicationSummary } from './components/screens/summaryScreen';

function App() {
  return (
    // <LoadingScreen
    //   text='Leave Request Created'
    // />
    // <SuccessfulScreen
    //   text='Leave Request Created'
    //   additionalText={<ExampleAdditionalText />}
    // />
    <SummaryScreen entitlementData={entitlementData} applicationSummary={applicationSummary} />
    // <DashboardWrapper />
  );
}

export default App;
