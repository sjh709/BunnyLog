const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const getRabbits = async (deviceId) => {
  const response = await fetch(
    `${API_BASE_URL}/api/rabbits?deviceId=${deviceId}`,
  );

  if (!response.ok) {
    throw new Error('토끼 정보를 불러오지 못했습니다.');
  }

  return response.json();
};

export const createRabbit = async (rabbit) => {
  const response = await fetch(`${API_BASE_URL}/api/rabbits`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(rabbit),
  });

  if (!response.ok) {
    throw new Error('토끼 등록에 실패했습니다.');
  }

  return response.json();
};
