import BottomNav from '../../components/BottomNav/BottomNav';
import PageHeader from '../../components/PageHeader/PageHeader';
import { Search } from 'lucide-react';
import './SnackBook.css';

function SnackBook() {
  return (
    <div className='snack-container'>
      <PageHeader title='간식 도감' />

      <div className='search-box'>
        <Search size={18} />
        <input placeholder='간식 이름을 검색하세요.' />
      </div>

      <div className='filter'>
        <button className='active'>전체</button>
        <button>급여 가능</button>
        <button>급여 불가</button>
      </div>

      <div className='snack-list'>
        <div className='snack-card'>
          <div className='snack-left'>
            <div className='emoji'>🥕</div>

            <div>
              <h3>당근</h3>
              <p>채소</p>
            </div>
          </div>

          <span className='danger'>급여 불가</span>
        </div>

        <div className='snack-card'>
          <div className='snack-left'>
            <div className='emoji'>🥕</div>

            <div>
              <h3>당근</h3>
              <p>채소</p>
            </div>
          </div>

          <span className='safe'>급여 가능</span>
        </div>
      </div>

      <BottomNav />
    </div>
  );
}

export default SnackBook;
