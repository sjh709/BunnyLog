import Button from '../../components/Button/Button';
import { CircleCheckBig } from 'lucide-react';
import './SetupComplete.css';
import { useLocation, useNavigate } from 'react-router-dom';

function SetupComplete() {
  const location = useLocation();
  const rabbitName = location.state?.rabbitName ?? '토끼';
  const navigate = useNavigate();

  return (
    <div className='complete-container'>
      <div className='complete-content'>
        <div className='check-circle'>
          <CircleCheckBig size={52} />
        </div>

        <h1>
          {rabbitName} 등록이
          <br />
          완료되었어요!
        </h1>

        <p className='complete-message'>
          이제 BunnyLog에서
          <br />
          {rabbitName}의 간식과 기록을
          <br />
          관리해볼까요?
        </p>
      </div>

      <div>
        <Button text='홈으로 이동' onClick={() => navigate('/home')} />
      </div>
    </div>
  );
}

export default SetupComplete;
