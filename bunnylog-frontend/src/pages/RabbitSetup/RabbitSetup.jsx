import './RabbitSetup.css';
import Button from '../../components/Button/Button';
import { ChevronLeft, Camera, Check, Calendar } from 'lucide-react';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function RabbitSetup() {
  const [gender, setGender] = useState('FEMALE');
  const [birthday, setBirthday] = useState('');
  const dateRef = useRef();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');

  const openDatePicker = () => {
    if (dateRef.current.showPicker) {
      dateRef.current.showPicker();
    } else {
      dateRef.current.click();
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const handleRegister = () => {
    if (!name.trim()) {
      alert('이름을 입력해주세요.');
      return;
    }

    const rabbit = {
      name,
      birthday,
      gender,
      weight,
    };

    console.log(rabbit);

    navigate('/setup/complete', {
      state: {
        rabbitName: name,
      },
    });
  };

  return (
    <div className='setup-container'>
      <div className='setup-title'>
        <button className='back-btn' onClick={() => navigate(-1)}>
          <ChevronLeft size={22} />
        </button>

        <h1>토끼 등록</h1>
      </div>

      <p className='description'>우리 토끼의 정보를 입력해주세요.</p>

      <div className='photo-box'>
        <Camera size={24} className='photo-icon' />
        <span>사진 추가 (선택)</span>
      </div>

      <div className='input-group'>
        <label>
          이름 <span className='required'>*</span>
        </label>
        <input
          type='text'
          placeholder='토끼 이름을 입력하세요.'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className='input-group'>
        <label>생일</label>
        <button type='button' className='date-button' onClick={openDatePicker}>
          {birthday ? formatDate(birthday) : '생일을 선택해주세요'}
          <Calendar size={18} />
        </button>

        <input
          ref={dateRef}
          type='date'
          value={birthday}
          onChange={(e) => setBirthday(e.target.value)}
          className='hidden-date'
        />
      </div>

      <div className='input-group'>
        <label>
          성별 <span className='required'>*</span>
        </label>

        <div className='gender-group'>
          <label
            className={`gender-chip ${gender === 'FEMALE' ? 'selected' : ''}`}
          >
            <input
              type='radio'
              name='gender'
              value='FEMALE'
              checked={gender === 'FEMALE'}
              onChange={(e) => setGender(e.target.value)}
            />
            <span>♀ 암컷</span>
            {gender === 'FEMALE' && <Check className='check-icon' size={16} />}
          </label>

          <label
            className={`gender-chip ${gender === 'MALE' ? 'selected' : ''}`}
          >
            <input
              type='radio'
              name='gender'
              value='MALE'
              checked={gender === 'MALE'}
              onChange={(e) => setGender(e.target.value)}
            />
            <span>♂ 수컷</span>
            {gender === 'MALE' && <Check className='check-icon' size={16} />}
          </label>
        </div>
      </div>

      <div className='input-group'>
        <label>몸무게(kg)</label>
        <input
          type='number'
          placeholder='예) 1.8'
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <div className='button-area'>
        <Button text='등록하기' onClick={handleRegister} />
      </div>
    </div>
  );
}

export default RabbitSetup;
