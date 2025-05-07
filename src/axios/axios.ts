import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL, // 환경변수로 관리 추천
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true, // 필요하면 (쿠키 기반 인증 등)
});

export default axiosInstance;
