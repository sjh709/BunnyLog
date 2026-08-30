import './Welcome.css';
import { Leaf, BookOpen, Rabbit } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import { getRabbits } from '../../api/rabbitApi';

function Welcome() {
  const navigate = useNavigate();

  const handleStart = async () => {
    const deviceId = localStorage.getItem('deviceId');

    if (!deviceId) {
      navigate('/setup');
      return;
    }

    try {
      const rabbits = await getRabbits(deviceId);

      if (rabbits.length > 0) {
        navigate('/home');
      } else {
        navigate('/setup');
      }
    } catch (error) {
      console.error(error);
    }
  };

  // 테스트 초기화
  const resetDevice = () => {
    localStorage.removeItem('deviceId');
    window.location.reload();
  };

  return (
    <div className='welcome-container'>
      <div className='welcome-content'>
        <h1>BunnyLog</h1>

        <p className='description'>
          토끼의 간식과 기록을
          <br />
          쉽게 관리해보세요.
        </p>

        <div className='feature-list'>
          <div className='feature-item'>
            <Leaf size={18} className='feature-icon' />
            먹어도 되는 간식 확인
          </div>
          <div className='feature-item'>
            <BookOpen size={18} className='feature-icon' />
            간식 일지 작성
          </div>
          <div className='feature-item'>
            <Rabbit size={18} className='feature-icon' />
            우리 토끼 정보 관리
          </div>
        </div>
      </div>

      <div className='button-area'>
        <Button text='시작하기' onClick={handleStart} />
        <Button text='테스트 초기화' onClick={resetDevice} />
      </div>
    </div>
  );
}

export default Welcome;
