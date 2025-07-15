import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../../api/authAPI";
import { checkToken } from "../../api/authAPI";
import * as S from "./style";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleLogin = async () => {
    if (!form.email || !form.password) {
      setError("모든 필드를 입력해주세요.");
      return;
    }

    setIsLoading(true);
    try {
      const res = await login(form);
      const token = res.data.accessToken;
      localStorage.setItem("accessToken", token);
      const verify = await checkToken();
      if (verify.status === 200) {
        window.location.replace("/");
      } else {
        setError("토큰이 유효하지 않습니다.");
      }
    } catch {
      setError("이메일 또는 비밀번호가 잘못되었습니다.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };

  return (
    <S.Container>
      <S.LoginBox>
        <S.Title>함자 로그인</S.Title>

        <S.Form>
          <S.InputGroup>
            <S.Label>이메일</S.Label>
            <S.Input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="email@example.com"
              autoComplete="email"
            />
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>비밀번호</S.Label>
            <S.Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="비밀번호를 입력하세요"
              autoComplete="current-password"
            />
          </S.InputGroup>

          {error && <S.ErrorText>{error}</S.ErrorText>}

          <S.Button onClick={handleLogin} disabled={isLoading}>
            {isLoading ? "로그인 중..." : "로그인"}
          </S.Button>

          <S.Footer>
            <S.FooterText>
              계정이 없으신가요? <Link to="/signup">회원가입</Link>
            </S.FooterText>
          </S.Footer>
        </S.Form>
      </S.LoginBox>
    </S.Container>
  );
};

export default Login;
