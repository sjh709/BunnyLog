import { ChevronRight } from 'lucide-react';
import './RabbitCard.css';

function RabbitCard() {
  return (
    <section className='rabbit-card'>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqflbgmBq5TPH6qB7fdoP50EGNYAE7s-nrujk-pixzSB6pRjKyhAX91aY&s=10'
        alt='토끼 프로필 사진'
        className='rabbit-photo'
      />

      <div className='rabbit-info'>
        <div className='rabbit-top'>
          <h2>
            토리 <span>♀</span>
          </h2>
        </div>

        <div className='info-item'>
          <span>생일</span>
          <strong>2021.04.21</strong>
        </div>

        <div className='info-item'>
          <span>몸무게</span>
          <strong>1.8 kg</strong>
        </div>
      </div>

      <div className='rabbit-info-btn'>
        <ChevronRight size={22} />
      </div>
    </section>
  );
}

export default RabbitCard;
