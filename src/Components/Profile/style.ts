import styled from "styled-components";

// 네비게이션 관련 스타일 (기존 유지)
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

export const NavDim = styled.div`
  position: fixed;
  left: 0; right: 0; bottom: 0;
  height: 60px;
  background: rgba(0,0,0,0.25);
  z-index: 1500;
  pointer-events: none;
`;

// 프로필 관련 스타일 (새로 개선)
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow-y: auto;
  padding-bottom: 80px;
`;

export const Header = styled.div`
  padding: 24px 20px 16px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0;
`;

export const ProfileSection = styled.div`
  background-color: #ffffff;
  padding: 24px 20px;
  text-align: center;
  border-bottom: 1px solid #e0e0e0;
`;

export const ProfileImageContainer = styled.div`
  margin-bottom: 16px;
`;

export const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 2px solid #e8e8e8;
  object-fit: cover;
`;

export const ProfileName = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0 0 4px 0;
`;

export const ProfileEmail = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 0;
`;

export const InfoSection = styled.div`
  background-color: #ffffff;
  padding: 0 20px;
  border-bottom: 8px solid #f5f5f5;
`;

export const InfoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`;

export const InfoLabel = styled.span`
  font-size: 14px;
  color: #666666;
  font-weight: 500;
`;

export const InfoValue = styled.span`
  font-size: 14px;
  color: #2c2c2c;
  font-weight: 500;
`;

export const ButtonSection = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-bottom: 8px solid #f5f5f5;
`;

export const ActionButton = styled.button`
  width: 100%;
  background-color: #007AFF;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: background-color 0.2s ease;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    background-color: #0056CC;
  }
  
  &:active {
    background-color: #004499;
  }
`;

export const BottomSection = styled.div`
  background-color: #ffffff;
  padding: 20px;
`;

export const SecondaryButton = styled.button`
  width: 100%;
  background-color: #f8f9fa;
  color: #495057;
  font-size: 16px;
  font-weight: 500;
  padding: 14px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  cursor: pointer;
  margin-bottom: 12px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

export const DangerButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  color: #dc3545;
  font-size: 16px;
  font-weight: 500;
  padding: 14px;
  border: 1px solid #dc3545;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #dc3545;
    color: #ffffff;
  }
`;

export const Message = styled.div<{ $danger?: boolean }>`
  color: ${({ $danger }) => ($danger ? '#dc3545' : '#007AFF')};
  margin-top: 12px;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

// 로딩 및 에러 상태
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #666666;
`;

export const ErrorContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #dc3545;
`;

export const DeactivatedContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #666666;
`;

export const NoDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 16px;
  color: #666666;
`;

// 모달 관련 스타일
export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const ModalBox = styled.div`
  background-color: #ffffff;
  border-radius: 12px;
  width: 100%;
  max-width: 400px;
  max-height: 90vh;
  overflow-y: auto;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px 0 20px;
`;

export const ModalTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0;
`;

export const ModalClose = styled.button`
  background: none;
  border: none;
  font-size: 24px;
  color: #999999;
  cursor: pointer;
  padding: 0;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    color: #666666;
  }
`;

export const ImageUploadSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #f0f0f0;
`;

export const ImagePreview = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 40px;
  border: 2px solid #e8e8e8;
  object-fit: cover;
  margin-bottom: 12px;
`;

export const ImageUploadButton = styled.label`
  background-color: #f8f9fa;
  color: #495057;
  font-size: 14px;
  font-weight: 500;
  padding: 8px 16px;
  border: 1px solid #dee2e6;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

export const ImageUploadInput = styled.input`
  display: none;
`;

export const FormGroup = styled.div`
  padding: 0 20px 16px 20px;
`;

export const FormLabel = styled.label`
  display: block;
  font-size: 14px;
  font-weight: 500;
  color: #2c2c2c;
  margin-bottom: 6px;
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 12px;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  font-size: 16px;
  color: #2c2c2c;
  background-color: #ffffff;
  box-sizing: border-box;
  
  &:focus {
    outline: none;
    border-color: #007AFF;
  }
  
  &::placeholder {
    color: #999999;
  }
`;

export const ModalButtonGroup = styled.div`
  padding: 16px 20px 20px 20px;
  border-top: 1px solid #f0f0f0;
`;

export const PrimaryButton = styled.button`
  width: 100%;
  background-color: #007AFF;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #0056CC;
  }
  
  &:active {
    background-color: #004499;
  }
`;

export const SecondaryButtonModal = styled.button`
  width: 100%;
  background-color: #f8f9fa;
  color: #495057;
  font-size: 16px;
  font-weight: 500;
  padding: 14px;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 8px;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #e9ecef;
  }
`;

export const DangerButtonModal = styled.button`
  width: 100%;
  background-color: #dc3545;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 14px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #c82333;
  }
`;

export const ConfirmText = styled.div`
  padding: 0 20px 20px 20px;
  text-align: center;
  font-size: 16px;
  color: #2c2c2c;
  line-height: 1.4;
`;