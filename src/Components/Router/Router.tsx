import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Main from "../../page/main";
// import Login from '../../page/Login/loginPage'
// import Profile from '../../page/Profile/ProfilePage';
// import SpecDetail from "../Specification/SpecDetail";
// import CellDetail from "../Specification/SpecDetail/SpecTable/CellDetail";
// src/Components/Router/Router.tsx
import Login from "../../page/Login";
import Signup from "../../page/Signup/Signup";
import { checkToken } from "../../api/authAPI";
import HospitalDetail from "../HospitalDetail";

const Router = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  // 새로고침 시 토큰 유효성 검사
  useEffect(() => {
    const verify = async () => {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        setIsAuthenticated(false);
        return;
      }

      try {
        await checkToken(); // 200 OK → 토큰 유효
        setIsAuthenticated(true);
      } catch {
        localStorage.removeItem("accessToken"); // 토큰 무효 시 삭제
        setIsAuthenticated(false);
      }
      setIsAuthenticated(true); // 초기값 설정
    };

    verify();
  }, []);

  if (isAuthenticated === null) return <div>로딩 중...</div>; // 검사 중

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/login"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Login />
          }
        />
        <Route
          path="/signup"
          element={
            isAuthenticated ? <Navigate to="/" replace /> : <Signup />
          }
        />
        <Route
          path="/"
          element={
            isAuthenticated ? <Main /> : <Navigate to="/login" replace />
          }
        />
        <Route
          path="/hospital/:id"
          element={<HospitalDetail />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
