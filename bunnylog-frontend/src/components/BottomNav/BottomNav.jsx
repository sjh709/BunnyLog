import { House, Rabbit, BookOpen, NotebookPen } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import './BottomNav.css';

function BottomNav() {
  return (
    <nav className='bottom-nav'>
      <NavLink to='/home'>
        <House size={24} />
        <span>홈</span>
      </NavLink>

      <NavLink to='/'>
        <Rabbit size={24} />
        <span>토끼 관리</span>
      </NavLink>

      <NavLink to='/'>
        <BookOpen size={24} />
        <span>간식 도감</span>
      </NavLink>

      <NavLink to='/'>
        <NotebookPen size={24} />
        <span>간식 일지</span>
      </NavLink>
    </nav>
  );
}

export default BottomNav;
