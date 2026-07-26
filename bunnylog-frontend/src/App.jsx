import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import RabbitSetup from './pages/RabbitSetup/RabbitSetup';
import SetupComplete from './pages/SetupComplete/SetupComplete';
import Home from './pages/Home/Home';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/welcome' replace />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/setup' element={<RabbitSetup />} />
      <Route path='/setup/complete' element={<SetupComplete />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
