import { useNavigate } from 'react-router-dom';
import './RabbitCard.css';

function RabbitCard({ rabbit }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/rabbits/${rabbit.id}`);
  };

  return (
    <section className='rabbit-card' onClick={handleClick}>
      <img
        src={rabbit.imageUrl}
        alt={`${rabbit.name} 프로필 사진`}
        className='rabbit-photo'
      />

      <div className='rabbit-info'>
        <div className='rabbit-top'>
          <h2>
            {rabbit.name} <span>{rabbit.gender === 'FEMALE' ? '♀' : '♂'}</span>
          </h2>
        </div>

        <div className='info-item'>
          <span>몸무게</span>
          <strong>{rabbit.weight} kg</strong>
        </div>
      </div>
    </section>
  );
}

export default RabbitCard;
