// src/api/authAPI.ts
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000', // API 주소에 맞게 수정
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

export const login = (data: { email: string; password: string }) =>
  api.post(`/api/auth/signin`, data);

export const checkToken = () =>
  api.get("/api/auth/verify-token", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });