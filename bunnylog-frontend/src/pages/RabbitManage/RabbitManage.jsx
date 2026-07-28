import PageHeader from '../../components/PageHeader/PageHeader';
import { Plus } from 'lucide-react';
import './RabbitManage.css';
import RabbitCard from '../../components/RabbitCard/RabbitCard';
import BottomNav from '../../components/BottomNav/BottomNav';
import { useNavigate } from 'react-router-dom';

function RabbitManage() {
  const navigate = useNavigate();

  return (
    <div className='rabbit-container'>
      <PageHeader
        title='토끼 관리'
        right={
          <button className='add-btn' onClick={() => navigate('/setup')}>
            <Plus size={20} />
          </button>
        }
      />

      <RabbitCard />
      <RabbitCard />

      <BottomNav />
    </div>
  );
}

export default RabbitManage;
