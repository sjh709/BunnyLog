import { ChevronRight } from 'lucide-react';
import BottomNav from '../../components/BottomNav/BottomNav';
import './Home.css';

function Home() {
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
