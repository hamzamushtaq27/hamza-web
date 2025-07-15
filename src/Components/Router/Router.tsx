import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Main from "../../page/main";
import Login from "../../page/Login";
import Signup from "../../page/Signup/Signup";
import HospitalDetail from "../HospitalDetail/index";
import ProtectedRoute from "../ProtectedRoute"; // 경로 확인 필요

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* 보호된 라우트 (로그인 필요) */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Main />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hospital/:id"
          element={
            <ProtectedRoute>
              <HospitalDetail hospitalId={0} />
            </ProtectedRoute>
          }
        />

        {/* 공개 라우트 */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;