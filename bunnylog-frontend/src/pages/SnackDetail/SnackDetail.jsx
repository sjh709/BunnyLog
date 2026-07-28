import PageHeader from '../../components/PageHeader/PageHeader';
import { ChevronLeft, Star, ChevronRight } from 'lucide-react';
import './SnackDetail.css';

function SnackDetail() {
  const snack = {
    emoji: '🍌',
    name: '바나나',
    status: '급여 가능 (주의)',
    description:
      '바나나는 칼륨이 풍부해요.\n당분이 높아 많은 양은 주면 안 돼요.',
    caution: ['소량만 급여해주세요.', '껍질은 꼭 제거하세요.'],
  };

  return (
    <div className='detail-container'>
      <PageHeader
        title={snack.name}
        left={
          <button className='prev-btn'>
            <ChevronLeft />
          </button>
        }
        right={
          <button className='star-btn'>
            <Star />
          </button>
        }
      />

      <section className='snack-summary'>
        <div className='snack-emoji'>{snack.emoji}</div>
        <span className='safe'>급여 가능</span>
      </section>

      <section className='detail-section'>
        <h2>설명</h2>
        <p>{snack.description}</p>
      </section>

      <section className='detail-section'>
        <h2>주의사항</h2>
        <ul>
          {snack.caution.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <section className='reaction-section'>
        <h2>내 토끼 반응</h2>

        <button className='reaction-card'>
          <div className='reaction-left'>
            🐰 <span>토리</span>
          </div>

          <div className='reaction-right'>😊 잘 먹어요!</div>

          <ChevronRight size={18} />
        </button>

        <button className='reaction-card'>
          <div className='reaction-left'>
            🐰 <span>망고</span>
          </div>

          <div className='reaction-right'>😅 별로 안좋아해요. 잘 안먹어요.</div>

          <ChevronRight size={18} />
        </button>
      </section>
    </div>
  );
}

export default SnackDetail;
