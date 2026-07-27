import BottomNav from '../../components/BottomNav/BottomNav';
import RabbitCard from '../../components/RabbitCard/RabbitCard';
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
      <RabbitCard />

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
