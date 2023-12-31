import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/sidebar.jsx';
import Dashboard from './components/dashboard.jsx';
import ServiceRiskReport from './components/ServiceRiskReport.jsx';
import Notifications from './components/Notifications.jsx';
import Report from './components/Report.jsx';

function App() {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/service-risk-report" element={<ServiceRiskReport/>} />
          <Route path="/notifications" element={<Notifications/>} />
          <Route path="/report" element={<Report/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
