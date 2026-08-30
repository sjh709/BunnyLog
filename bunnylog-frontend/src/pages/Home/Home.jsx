import BottomNav from '../../components/BottomNav/BottomNav';
import RabbitCard from '../../components/RabbitCard/RabbitCard';
import { ChevronRight, ChevronLeft } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getRabbits } from '../../api/rabbitApi';
import './Home.css';

function Home() {
  const [rabbits, setRabbits] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const fetchRabbits = async () => {
      const deviceId = localStorage.getItem('deviceId');

      if (!deviceId) {
        return;
      }

      try {
        const rabbits = await getRabbits(deviceId);
        console.log('rrr', rabbits);
        setRabbits(rabbits);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRabbits();
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev === rabbits.length - 1) {
        return 0;
      }

      return prev + 1;
    });
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev === 0) {
        return rabbits.length - 1;
      }

      return prev - 1;
    });
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (touchStart === null || rabbits.length <= 1) {
      return;
    }

    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;

    // 너무 조금 움직인 경우 스와이프로 판단하지 않음
    if (Math.abs(distance) < 50) {
      setTouchStart(null);
      return;
    }

    if (distance > 0) {
      // 왼쪽으로 스와이프 -> 다음
      setCurrentIndex((prev) => {
        if (prev === rabbits.length - 1) {
          return 0;
        }

        return prev + 1;
      });
    } else {
      // 오른쪽으로 스와이프 -> 이전
      setCurrentIndex((prev) => {
        if (prev === 0) {
          return rabbits.length - 1;
        }

        return prev - 1;
      });
    }

    setTouchStart(null);
  };

  return (
    <div className='home-container'>
      {/* 인사말 */}
      <header className='home-header'>
        <div>
          <p className='greeting'>안녕하세요,</p>
          <h1>토리 집사님!</h1>
        </div>
      </header>

      {/* 토끼정보(카드) */}
      <div className='rabbit-carousel'>
        {rabbits.length > 1 && (
          <button className='carousel-btn' onClick={handlePrev}>
            <ChevronLeft size={22} />
          </button>
        )}

        <div
          className='rabbit-slider'
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className='rabbit-track'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {rabbits.map((rabbit) => (
              <div className='rabbit-slide' key={rabbit.id}>
                <RabbitCard rabbit={rabbit} />
              </div>
            ))}
          </div>
        </div>

        {rabbits.length > 1 && (
          <button className='carousel-btn' onClick={handleNext}>
            <ChevronRight size={22} />
          </button>
        )}
      </div>

      {rabbits.length > 1 && (
        <div className='carousel-indicator'>
          {rabbits.map((rabbit, index) => (
            <span
              key={rabbit.id}
              className={index === currentIndex ? 'active' : ''}
            />
          ))}
        </div>
      )}

      {/* 최근급여기록(카드) */}
      <section className='feed-card'>
        <h2>최근 급여 기록</h2>

        <div className='feed-item'>
          <span className='emoji'>🍌</span>
          <span className='food-name'>바나나</span>
          <span className='feed-date'>2026.07.27</span>
          <span>❤️</span>
        </div>

        <div className='feed-item'>
          <span className='emoji'>🥕</span>
          <span className='food-name'>당근</span>
          <span className='feed-date'>2026.07.25</span>
          <span>😀</span>
        </div>

        <div className='feed-item'>
          <span className='emoji'>🍎</span>
          <span className='food-name'>사과</span>
          <span className='feed-date'>2026.07.21</span>
          <span>😍</span>
        </div>

        <button className='more-btn'>전체 보기</button>
      </section>

      <BottomNav />
    </div>
  );
}

export default Home;
