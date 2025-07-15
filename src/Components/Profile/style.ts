import styled from "styled-components";

export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: white;
  border-top: 1px solid #e0e0e0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  display: flex;
`;

export const MenuItem = styled.div<{ $isActive?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  position: relative;
  transition: all 0.3s ease;
  
  /* 기본 상태 */
  color: ${props => props.$isActive ? '#ffffff' : '#6c757d'};
  background-color: ${props => props.$isActive ? '#007bff' : 'transparent'};
  
  /* 호버 효과 (선택되지 않은 항목에만) */
  &:hover {
    background-color: ${props => props.$isActive ? '#007bff' : '#f0f0f0'};
  }
  
  /* 아이콘과 텍스트 색상 */
  span {
    font-size: 12px;
    margin-top: 4px;
    font-weight: ${props => props.$isActive ? '600' : '400'};
  }
`;

export const ActiveBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #0056b3;
`;

export const IconWrapper = styled.div<{ $isActive?: boolean }>`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    /* 선택된 아이콘 필터 효과 (흰색으로 변경) */
    filter: ${props => props.$isActive ? 'brightness(0) invert(1)' : 'none'};
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
  background: #f0f0f0;
  padding: 40px 0;
`;

export const ProfileCard = styled.div`
  background: #fff;
  border-radius: 20px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 36px;
  width: 400px;
  min-height: 520px;
  border: 1px solid #e0e0e0;
`;

export const ProfileImage = styled.img`
  width: 110px;
  height: 110px;
  border-radius: 50%;
  border: 4px solid #e0e0e0;
  margin-bottom: 14px;
  background: #f0f0f0;
`;

export const ProfileTitle = styled.div`
  font-weight: 700;
  font-size: 24px;
  margin-bottom: 4px;
  color: #007bff;
`;

export const ProfileEmail = styled.div`
  color: #6c757d;
  font-size: 15px;
`;

export const ProfileLabel = styled.label`
  font-weight: 500;
  color: #6c757d;
`;

export const ProfileInput = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin-top: 4px;
  font-size: 15px;
  box-sizing: border-box;
`;

export const ProfileButton = styled.button<{ $primary?: boolean; $danger?: boolean }>`
  flex: 1;
  background: ${({ $primary, $danger }) =>
    $primary ? '#007bff' : $danger ? '#fff0f0' : '#f0f0f0'};
  color: ${({ $primary, $danger }) =>
    $primary ? '#fff' : $danger ? '#ff4f4f' : '#6c757d'};
  border: none;
  border-radius: 8px;
  padding: 12px 0;
  font-weight: 600;
  font-size: 15px;
  cursor: pointer;
  transition: background 0.2s;
  margin-top: 0;
`;

export const ProfileDivider = styled.hr`
  margin: 36px 0 24px 0;
  border: 0;
  border-top: 1px solid #e0e0e0;
`;

export const ProfileMsg = styled.div<{ $danger?: boolean }>`
  color: ${({ $danger }) => ($danger ? '#ff4f4f' : '#007bff')};
  margin-top: 12px;
  text-align: center;
  font-weight: 500;
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0; left: 0; right: 0; bottom: 0;
  background: rgba(0,0,0,0.35);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBox = styled.div`
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
  padding: 36px 32px 28px 32px;
  min-width: 340px;
  max-width: 90vw;
  position: relative;
`;

export const ModalTitle = styled.div`
  font-size: 22px;
  font-weight: 700;
  color: #007bff;
  margin-bottom: 24px;
  text-align: center;
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;
  background: none;
  border: none;
  font-size: 22px;
  color: #bbb;
  cursor: pointer;
  &:hover { color: #007bff; }
`;

export const CustomInputWrapper = styled.div`
  margin-bottom: 22px;
`;

export const CustomInputLabel = styled.label`
  display: block;
  font-size: 15px;
  font-weight: 600;
  color: #444;
  margin-bottom: 7px;
`;

export const CustomInput = styled.input`
  width: 100%;
  padding: 13px 14px;
  border-radius: 9px;
  border: 2px solid #e0e0e0;
  font-size: 16px;
  background: #fafbfc;
  transition: border 0.2s, box-shadow 0.2s;
  outline: none;
  box-sizing: border-box;
  &:focus {
    border: 2px solid #007bff;
    background: #fff;
    box-shadow: 0 0 0 2px #e3f0ff;
  }
  &::placeholder {
    color: #b0b8c1;
    font-size: 15px;
    font-weight: 400;
  }
`;

export const ConfirmModalButtonWrapper = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 28px;
`;

export const ProfileImageUploadWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 22px;
`;

export const ProfileImagePreview = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 50%;
  border: 3px solid #e0e0e0;
  object-fit: cover;
  margin-bottom: 10px;
  background: #f0f0f0;
`;

export const ProfileImageUploadInput = styled.input`
  display: none;
`;

export const ProfileImageUploadButton = styled.label`
  display: inline-block;
  background: #f0f0f0;
  color: #007bff;
  border-radius: 7px;
  padding: 7px 18px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  border: 1.5px solid #e0e0e0;
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: #e3f0ff;
    color: #0056b3;
  }
`;

export const NavDim = styled.div`
  position: fixed;
  left: 0; right: 0; bottom: 0;
  height: 60px;
  background: rgba(0,0,0,0.25);
  z-index: 1500;
  pointer-events: none;
`;