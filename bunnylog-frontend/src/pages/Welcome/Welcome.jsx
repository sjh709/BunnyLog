import './Welcome.css';
import { Leaf, BookOpen, Rabbit } from 'lucide-react';
import Button from '../../components/Button/Button';

function Welcome() {
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

        <div className='button-area'>
          <Button text='시작하기' />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
