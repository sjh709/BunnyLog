import PageHeader from '../../components/PageHeader/PageHeader';
import { Plus } from 'lucide-react';
import { useState, useEffect } from 'react';
import './RabbitManage.css';
import RabbitCard from '../../components/RabbitCard/RabbitCard';
import BottomNav from '../../components/BottomNav/BottomNav';
import { useNavigate } from 'react-router-dom';
import { getRabbits } from '../../api/rabbitApi';

function RabbitManage() {
  const [rabbits, setRabbits] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRabbits = async () => {
      const deviceId = localStorage.getItem('deviceId');

      if (!deviceId) {
        return;
      }

      try {
        const data = await getRabbits(deviceId);
        setRabbits(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRabbits();
  }, []);

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

      <div className='rabbit-list'>
        {rabbits.map((rabbit) => (
          <RabbitCard rabbit={rabbit} key={rabbit.id} />
        ))}
      </div>

      <BottomNav />
    </div>
  );
}

export default RabbitManage;
