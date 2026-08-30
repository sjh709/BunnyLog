import BottomNav from '../../components/BottomNav/BottomNav';
import PageHeader from '../../components/PageHeader/PageHeader';
import { ChevronLeft } from 'lucide-react';
import defaultRabbitImage from '../../assets/default-rabbit.png';
import './RabbitDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getRabbit } from '../../api/rabbitApi';

function RabbitDetail() {
  const { rabbitId } = useParams();
  const navigate = useNavigate();

  const [rabbit, setRabbit] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRabbit = async () => {
      try {
        const data = await getRabbit(rabbitId);
        setRabbit(data);
      } catch (error) {
        console.error(error);
        alert('토끼 정보를 불러오지 못했습니다.');
        navigate(-1);
      } finally {
        setLoading(false);
      }
    };

    fetchRabbit();
  }, [rabbitId, navigate]);

  if (loading) {
    return <div>불러오는 중...</div>;
  }

  if (!rabbit) {
    return null;
  }

  return (
    <div className='rabbit-detail-container'>
      <PageHeader
        title='토끼 정보'
        left={
          <button className='prev-btn' onClick={() => navigate(-1)}>
            <ChevronLeft />
          </button>
        }
      />

      <div className='rabbit-detail-content'>
        <img
          src={rabbit.imageUrl || defaultRabbitImage}
          alt={`${rabbit.name} 프로필 사진`}
          className='rabbit-detail-image'
        />

        <h2>
          {rabbit.name}{' '}
          <span className={rabbit.gender === 'FEMALE' ? 'female' : 'male'}>
            {rabbit.gender === 'FEMALE' ? '♀' : '♂'}
          </span>
        </h2>

        <div className='rabbit-detail-info'>
          <div className='detail-item'>
            <span>생일</span>
            <strong>{rabbit.birthday.replaceAll('-', '.')}</strong>
          </div>

          <div className='detail-item'>
            <span>몸무게</span>
            <strong>{rabbit.weight} kg</strong>
          </div>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default RabbitDetail;
