import { useState } from 'react';
import { Link } from 'react-router-dom';
import { checkEmail, checkNickname, signup } from '../../api/authAPI';
import * as S from "./style";

const Signup = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    phoneNumber: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    nickname: '',
    phoneNumber: '',
    general: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // 입력 시 해당 필드의 에러 메시지 제거
    setErrors({ ...errors, [name]: '', general: '' });
    
    // 실시간 유효성 검사
    if (name === 'passwordConfirm' && form.password) {
      if (value !== form.password) {
        setErrors({ ...errors, passwordConfirm: '비밀번호가 일치하지 않습니다.' });
      }
    }
  };

  const validateForm = () => {
    const newErrors = { ...errors };
    let isValid = true;

    // 이메일 검증
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email) {
      newErrors.email = '이메일을 입력해주세요.';
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = '올바른 이메일 형식이 아닙니다.';
      isValid = false;
    }

    // 비밀번호 검증
    if (!form.password) {
      newErrors.password = '비밀번호를 입력해주세요.';
      isValid = false;
    } else if (form.password.length < 8) {
      newErrors.password = '비밀번호는 8자 이상이어야 합니다.';
      isValid = false;
    }

    // 비밀번호 확인
    if (!form.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호 확인을 입력해주세요.';
      isValid = false;
    } else if (form.password !== form.passwordConfirm) {
      newErrors.passwordConfirm = '비밀번호가 일치하지 않습니다.';
      isValid = false;
    }

    // 닉네임 검증
    if (!form.nickname) {
      newErrors.nickname = '닉네임을 입력해주세요.';
      isValid = false;
    } else if (form.nickname.length < 2) {
      newErrors.nickname = '닉네임은 2자 이상이어야 합니다.';
      isValid = false;
    }

    // 전화번호 검증
    const phoneRegex = /^01[0-9]-?[0-9]{3,4}-?[0-9]{4}$/;
    if (!form.phoneNumber) {
      newErrors.phoneNumber = '전화번호를 입력해주세요.';
      isValid = false;
    } else if (!phoneRegex.test(form.phoneNumber.replace(/-/g, ''))) {
      newErrors.phoneNumber = '올바른 전화번호 형식이 아닙니다.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSignup = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      // 이메일 중복 체크
      const emailCheck = await checkEmail(form.email);
      if (!emailCheck.data.available) {
        setErrors({ ...errors, email: '이미 사용 중인 이메일입니다.' });
        setIsLoading(false);
        return;
      }

      // 닉네임 중복 체크
      const nicknameCheck = await checkNickname(form.nickname);
      if (!nicknameCheck.data.available) {
        setErrors({ ...errors, nickname: '이미 사용 중인 닉네임입니다.' });
        setIsLoading(false);
        return;
      }

      // 회원가입 진행
      await signup(form);
      alert('회원가입이 완료되었습니다. 로그인 페이지로 이동합니다.');
      window.location.href = '/login';
    } catch (error) {
      setErrors({ ...errors, general: '회원가입에 실패했습니다. 다시 시도해주세요.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSignup();
    }
  };

  return (
    <S.Container>
      <S.SignupBox>
        <S.Title>함자 회원가입</S.Title>
        
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
              hasError={!!errors.email}
            />
            {errors.email && <S.ErrorText>{errors.email}</S.ErrorText>}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>비밀번호</S.Label>
            <S.Input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="8자 이상 입력해주세요"
              autoComplete="new-password"
              hasError={!!errors.password}
            />
            {errors.password && <S.ErrorText>{errors.password}</S.ErrorText>}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>비밀번호 확인</S.Label>
            <S.Input
              name="passwordConfirm"
              type="password"
              value={form.passwordConfirm}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="비밀번호를 다시 입력해주세요"
              autoComplete="new-password"
              hasError={!!errors.passwordConfirm}
            />
            {errors.passwordConfirm && <S.ErrorText>{errors.passwordConfirm}</S.ErrorText>}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>닉네임</S.Label>
            <S.Input
              name="nickname"
              type="text"
              value={form.nickname}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="2자 이상 입력해주세요"
              autoComplete="username"
              hasError={!!errors.nickname}
            />
            {errors.nickname && <S.ErrorText>{errors.nickname}</S.ErrorText>}
          </S.InputGroup>

          <S.InputGroup>
            <S.Label>전화번호</S.Label>
            <S.Input
              name="phoneNumber"
              type="tel"
              value={form.phoneNumber}
              onChange={handleChange}
              onKeyPress={handleKeyPress}
              placeholder="010-1234-5678"
              autoComplete="tel"
              hasError={!!errors.phoneNumber}
            />
            {errors.phoneNumber && <S.ErrorText>{errors.phoneNumber}</S.ErrorText>}
          </S.InputGroup>

          {errors.general && <S.GeneralError>{errors.general}</S.GeneralError>}

          <S.Button onClick={handleSignup} disabled={isLoading}>
            {isLoading ? '가입 중...' : '회원가입'}
          </S.Button>

          <S.Footer>
            <S.FooterText>
              이미 계정이 있으신가요? <Link to="/login">로그인</Link>
            </S.FooterText>
          </S.Footer>
        </S.Form>
      </S.SignupBox>
    </S.Container>
  );
};

export default Signup;