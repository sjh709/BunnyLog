import { Plus } from 'lucide-react';
import './RabbitManage.css';
import RabbitCard from '../../components/RabbitCard/RabbitCard';
import BottomNav from '../../components/BottomNav/BottomNav';
import { useNavigate } from 'react-router-dom';

function RabbitManage() {
  const navigate = useNavigate();

  return (
    <div className='rabbit-container'>
      <div className='rabbit-header'>
        <div className='header-spacer'></div>
        <h1>토끼 관리</h1>
        <button className='add-btn' onClick={() => navigate('/setup')}>
          <Plus size={20} />
        </button>
      </div>

      <RabbitCard />
      <RabbitCard />

      <BottomNav />
    </div>
  );
}

export default RabbitManage;
