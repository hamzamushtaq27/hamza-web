// src/api/authAPI.ts
import axios from "axios";

const api = axios.create({
  baseURL: 'https://be0ee3a02f69.ngrok-free.app', 
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'ngrok-skip-browser-warning': 'true'
  }
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
  api.get("/api/auth/me", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

export const logout = () =>
  api.post("/api/auth/logout", {}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

export const refreshToken = () =>
  api.post("/api/auth/refresh", {}, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

export const updateProfile = (data: { nickname?: string; phoneNumber?: string }) =>
  api.put("/api/auth/profile", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });

export const changePassword = (data: { currentPassword: string; newPassword: string }) =>
  api.put("/api/auth/change-password", data, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    },
  });