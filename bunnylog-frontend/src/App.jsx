import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './pages/Welcome/Welcome';
import RabbitSetup from './pages/RabbitSetup/RabbitSetup';
import SetupComplete from './pages/SetupComplete/SetupComplete';
import Home from './pages/Home/Home';
import RabbitManage from './pages/RabbitManage/RabbitManage';
import SnackBook from './pages/SnackBook/SnackBook';
import SnackDetail from './pages/SnackDetail/SnackDetail';
import SnackLog from './pages/SnackLog/SnackLog';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/welcome' replace />} />
      <Route path='/welcome' element={<Welcome />} />
      <Route path='/setup' element={<RabbitSetup />} />
      <Route path='/setup/complete' element={<SetupComplete />} />
      <Route path='/home' element={<Home />} />
      <Route path='/rabbits' element={<RabbitManage />} />
      <Route path='/snacks' element={<SnackBook />} />
      <Route path='/logs' element={<SnackLog />} />
      <Route path='/snack' element={<SnackDetail />} /> // 임시
    </Routes>
  );
}

export default App;
