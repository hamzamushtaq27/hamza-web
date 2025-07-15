// src/api/authAPI.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://be0ee3a02f69.ngrok-free.app", // API 주소에 맞게 수정
  withCredentials: true,
});

export const checkEmail = (email: string) =>
  api.get(`/api/auth/check-email`, { params: { email } });

export const checkNickname = (nickname: string) =>
  api.get(`/api/auth/check-nickname`, { params: { nickname } });

export const signup = (data: {
  email: string;
  password: string;
  passwordConfirm: string;
  nickname: string;
  phoneNumber: string;
}) => api.post(`/api/auth/signup`, data);

export const login = (data: { email: string; password: string }) => {
  const dummyUser = { email: "test@gmail.com", password: "1234" };
  return new Promise<{ data: { accessToken: string } }>((resolve, reject) => {
    setTimeout(() => {
      if (
        data.email === dummyUser.email &&
        data.password === dummyUser.password
      ) {
        resolve({ data: { accessToken: "dummy-access-token" } });
      } else {
        reject(new Error("이메일 또는 비밀번호가 잘못되었습니다."));
      }
    }, 500); // 0.5초 후 응답 시뮬레이션
  });
};

export const checkToken = () =>
  api.get("/api/auth/verify-token", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });
