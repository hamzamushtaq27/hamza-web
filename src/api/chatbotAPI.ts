import axios from "axios";

const ACCESS_TOKEN = localStorage.getItem("accessToken") || '';
const api = axios.create({
  baseURL: 'https://be0ee3a02f69.ngrok-free.app',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true',
    'Authorization': `Bearer ${ACCESS_TOKEN}`,
  },
});

export const chatbot = ({ message, sessionId, isEmergency }: {
  message: string;
  sessionId: number;
  isEmergency: boolean;
}) => {
  return api.post('/api/chat/message', {
    message,
    sessionId,
    isEmergency,
  });
};