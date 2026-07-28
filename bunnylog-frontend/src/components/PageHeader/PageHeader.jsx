import './PageHeader.css';

function PageHeader({ title, left, right }) {
  return (
    <header className='page-header'>
      <div className='header-left'>{left}</div>

      <h1>{title}</h1>

      <div className='header-right'>{right}</div>
    </header>
  );
}

export default PageHeader;
