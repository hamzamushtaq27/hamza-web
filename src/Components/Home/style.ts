import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f8f9fa;
  backdrop-filter: blur(10px);
  overflow-y: auto;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px 0;
`;

export const Card = styled.div<{ $color: string }>`
  background: #fff;
  border-left: 8px solid ${(props) => props.$color};
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  padding: 20px 24px;
  margin: 0 16px;
  display: flex;
  flex-direction: column;
`;

export const DiagnosisButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 32px 0 24px 0;
`;

export const DiagnosisButton = styled.button`
  background: #4f8cff;
  color: #fff;
  font-size: 18px;
  font-weight: 600;
  padding: 16px 32px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.07);
  transition: background 0.2s;
  &:hover {
    background: #2563eb;
  }
`;
