import styled from 'styled-components';

export const Container = styled.div`
  padding: 16px;
  width: 90%;
  max-width: 100%;
  margin: 0 auto;
  background-color: #f8f9fa;
  min-height: 100vh;
  box-sizing: border-box;
  
  @media (min-width: 768px) {
    padding: 20px;
    width: 90%;
    max-width: 600px;
  }
  
  @media (min-width: 1024px) {
    padding: 24px;
    width: 90%;
    max-width: 700px;
  }
  
  /* Ensure proper touch targets */
  * {
    box-sizing: border-box;
  }
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #333;
  margin-bottom: 8px;
  
  @media (min-width: 768px) {
    font-size: 28px;
  }
  
  @media (min-width: 1024px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const TestButton = styled.button`
  width: 100%;
  padding: 14px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  margin-bottom: 24px;
  transition: background-color 0.3s;
  min-height: 48px;
  
  @media (min-width: 768px) {
    padding: 16px;
    font-size: 18px;
    margin-bottom: 30px;
  }
  
  &:hover {
    background-color: #0056b3;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const HistorySection = styled.div`
  margin-top: 20px;
`;

export const HistoryTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #333;
  margin-bottom: 16px;
`;

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ResultItem = styled.div`
  background-color: white;
  padding: 12px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (min-width: 480px) {
    padding: 16px;
    flex-wrap: nowrap;
  }
`;

export const ResultDate = styled.span`
  font-size: 12px;
  color: #666;
  
  @media (min-width: 480px) {
    font-size: 14px;
  }
`;

export const ResultScore = styled.span`
  font-size: 12px;
  font-weight: 600;
  color: #333;
  
  @media (min-width: 480px) {
    font-size: 14px;
  }
`;

export const ResultLevel = styled.span<{ color: string }>`
  font-size: 12px;
  font-weight: 600;
  color: ${props => props.color};
  padding: 4px 8px;
  background-color: ${props => props.color}20;
  border-radius: 6px;
  white-space: nowrap;
  
  @media (min-width: 480px) {
    font-size: 14px;
  }
`;

export const NoResults = styled.p`
  text-align: center;
  color: #666;
  font-size: 16px;
  padding: 40px 20px;
  background-color: white;
  border-radius: 12px;
`;

export const TestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 14px;
  color: #007bff;
  cursor: pointer;
  padding: 8px;
  min-height: 40px;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
  
  &:hover {
    color: #0056b3;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const Progress = styled.span`
  font-size: 12px;
  color: #666;
  font-weight: 600;
  
  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const QuestionContainer = styled.div`
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const QuestionNumber = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #007bff;
  margin-bottom: 8px;
  
  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const QuestionText = styled.p`
  font-size: 14px;
  color: #333;
  line-height: 1.6;
  margin: 0;
  
  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 20px;
  
  @media (min-width: 768px) {
    gap: 12px;
    margin-bottom: 30px;
  }
`;

export const OptionButton = styled.button`
  padding: 14px;
  background-color: white;
  border: 2px solid #e0e0e0;
  border-radius: 12px;
  font-size: 14px;
  color: #333;
  cursor: pointer;
  transition: all 0.3s;
  text-align: left;
  min-height: 48px;
  
  @media (min-width: 768px) {
    padding: 16px;
    font-size: 16px;
  }
  
  &:hover {
    border-color: #007bff;
    background-color: #f8f9ff;
  }
  
  &:active {
    transform: translateY(1px);
    border-color: #0056b3;
  }
`;

export const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background-color: #e0e0e0;
  border-radius: 4px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ width: number }>`
  height: 100%;
  background-color: #007bff;
  width: ${props => props.width}%;
  transition: width 0.3s ease;
`;

export const ResultContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  padding: 24px 16px;
  text-align: center;
  margin-top: 20px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  
  @media (min-width: 768px) {
    border-radius: 20px;
    padding: 40px 20px;
    margin-top: 40px;
  }
`;

export const ResultTitle = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: #333;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const ScoreDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    margin-bottom: 20px;
  }
`;

export const Score = styled.span`
  font-size: 36px;
  font-weight: 700;
  color: #007bff;
  
  @media (min-width: 768px) {
    font-size: 48px;
  }
`;

export const MaxScore = styled.span`
  font-size: 18px;
  color: #666;
  margin-left: 6px;
  
  @media (min-width: 768px) {
    font-size: 24px;
    margin-left: 8px;
  }
`;

export const LevelDisplay = styled.div<{ color: string }>`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: ${props => props.color};
  background-color: ${props => props.color}20;
  padding: 10px 20px;
  border-radius: 16px;
  margin-bottom: 16px;
  
  @media (min-width: 768px) {
    font-size: 20px;
    padding: 12px 24px;
    border-radius: 20px;
    margin-bottom: 20px;
  }
`;

export const ResultDescription = styled.p`
  font-size: 14px;
  color: #666;
  line-height: 1.6;
  margin-bottom: 24px;
  
  @media (min-width: 768px) {
    font-size: 16px;
    margin-bottom: 30px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  flex-wrap: wrap;
  
  @media (min-width: 480px) {
    gap: 12px;
    flex-wrap: nowrap;
  }
`;

export const PrimaryButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.3s;
  min-height: 44px;
  
  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 16px;
  }
  
  &:hover {
    background-color: #0056b3;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const SecondaryButton = styled.button`
  padding: 10px 20px;
  background-color: transparent;
  color: #007bff;
  border: 2px solid #007bff;
  border-radius: 12px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s;
  min-height: 44px;
  
  @media (min-width: 768px) {
    padding: 12px 24px;
    font-size: 16px;
  }
  
  &:hover {
    background-color: #007bff;
    color: white;
  }
  
  &:active {
    transform: translateY(1px);
  }
`;