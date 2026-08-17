import PageHeader from '../../components/PageHeader/PageHeader';
import Button from '../../components/Button/Button';
import './SnackLog.css';
import BottomNav from '../../components/BottomNav/BottomNav';

function SnackLog() {
  return (
    <div className='snack-log-container'>
      <PageHeader title='간식 일지' />

      <div className='add-log-btn'>
        <Button text='+ 기록 추가' />
      </div>

      <div className='log-list'>
        <section className='log-date-group'>
          <h2>2024.07.23</h2>

          <div className='log-group'>
            <button className='log-card'>
              <div className='rabbit-area'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqflbgmBq5TPH6qB7fdoP50EGNYAE7s-nrujk-pixzSB6pRjKyhAX91aY&s=10'
                  alt='토끼 프로필 사진'
                  className='rabbit-info-photo'
                />
                <span>토리</span>
              </div>

              <div className='snack-area'>
                <span className='snack-emoji'>🍌</span>
                <span>바나나</span>
              </div>

              <div className='reaction-area'>
                <span>2조각</span>
                <span className='reaction-emoji'>😀</span>
              </div>
            </button>

            <button className='log-card'>
              <div className='rabbit-area'>
                <img
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBqflbgmBq5TPH6qB7fdoP50EGNYAE7s-nrujk-pixzSB6pRjKyhAX91aY&s=10'
                  alt='토끼 프로필 사진'
                  className='rabbit-info-photo'
                />
                <span>토리</span>
              </div>

              <div className='snack-area'>
                <span className='snack-emoji'>🍌</span>
                <span>바나나</span>
              </div>

              <div className='reaction-area'>
                <span>2조각</span>
                <span className='reaction-emoji'>😀</span>
              </div>
            </button>
          </div>
        </section>
      </div>

      <BottomNav />
    </div>
  );
}

export default SnackLog;
