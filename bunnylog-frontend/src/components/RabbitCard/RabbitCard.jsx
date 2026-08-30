import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import defaultRabbitImage from '../../assets/default-rabbit.png';
import './RabbitCard.css';

function RabbitCard({ rabbit, showArrows, onPrev, onNext }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/rabbits/${rabbit.id}`);
  };

  const handlePrev = (e) => {
    e.stopPropagation();
    onPrev();
  };

  const handleNext = (e) => {
    e.stopPropagation();
    onNext();
  };

  return (
    <section className='rabbit-card' onClick={handleClick}>
      <img
        src={rabbit.imageUrl || defaultRabbitImage}
        alt={`${rabbit.name} 프로필 사진`}
        className='rabbit-photo'
      />

      <div className='rabbit-info'>
        <div className='rabbit-top'>
          <h2>
            {rabbit.name}{' '}
            <span className={rabbit.gender === 'FEMALE' ? 'female' : 'male'}>
              {rabbit.gender === 'FEMALE' ? '♀' : '♂'}
            </span>
          </h2>
        </div>

        <div className='info-item'>
          <span>몸무게</span>
          <strong>{rabbit.weight} kg</strong>
        </div>
      </div>

      {showArrows && (
        <>
          <button
            className='rabbit-arrow rabbit-arrow-left'
            onClick={handlePrev}
            aria-label='이전 토끼'
          >
            <ChevronLeft size={18} />
          </button>

          <button
            className='rabbit-arrow rabbit-arrow-right'
            onClick={handleNext}
            aria-label='다음 토끼'
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}
    </section>
  );
}

export default RabbitCard;
