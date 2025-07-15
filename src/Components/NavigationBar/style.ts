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