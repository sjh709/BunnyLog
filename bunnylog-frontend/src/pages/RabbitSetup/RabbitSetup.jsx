import './RabbitSetup.css';
import Button from '../../components/Button/Button';
import { ChevronLeft, Camera, Check, Calendar } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createRabbit } from '../../api/rabbitApi';

function RabbitSetup() {
  const [gender, setGender] = useState('FEMALE');
  const [birthday, setBirthday] = useState('');
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [weight, setWeight] = useState('');

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('ko-KR', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const generateDeviceId = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  };

  const handleRegister = async () => {
    if (!name.trim()) {
      alert('이름을 입력해주세요.');
      return;
    }
    if (!birthday) {
      alert('생일을 선택해주세요.');
      return;
    }
    if (!weight) {
      alert('몸무게를 입력해주세요.');
      return;
    }

    try {
      // const deviceId = localStorage.getItem('deviceId') || crypto.randomUUID();
      const deviceId = localStorage.getItem('deviceId') || generateDeviceId();

      const rabbit = {
        deviceId,
        imageUrl: null,
        name,
        birthday: birthday || null,
        gender,
        weight: weight ? Number(weight) : null,
      };

      await createRabbit(rabbit);

      localStorage.setItem('deviceId', deviceId);

      navigate('/setup/complete', {
        state: {
          rabbitName: name,
        },
      });
    } catch (error) {
      console.error(error);
      alert('토끼 등록에 실패했습니다.');
      // alert(`토끼 등록 실패: ${error.message}`);
    }
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
        <label>
          생일 <span className='required'>*</span>
        </label>

        <div className='date-button'>
          <span className={!birthday ? 'date-placeholder' : ''}>
            {birthday ? formatDate(birthday) : '생일을 선택해주세요.'}
          </span>

          <Calendar size={18} />

          <input
            type='date'
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
        </div>
      </div>

      <div className='input-group'>
        <label>성별</label>

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
        <label>
          몸무게(kg) <span className='required'>*</span>
        </label>
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
