import styled from 'styled-components';

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

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0 0 4px 0;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 0;
`;

export const TestButton = styled.button`
  background: #007AFF;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin: 20px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #0056CC;
  }
  
  &:active {
    background: #004499;
  }
`;

export const HistorySection = styled.div`
  padding: 0 20px;
`;

export const HistoryTitle = styled.h2`
  font-size: 18px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0 0 16px 0;
`;

export const ResultsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const ResultItem = styled.div`
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
`;

export const ResultHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`;

export const ResultDate = styled.span`
  font-size: 14px;
  color: #666666;
  font-weight: 500;
`;

export const ResultScore = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #2c2c2c;
`;

export const ResultLevel = styled.span<{ color: string }>`
  background-color: ${props => props.color};
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const NoResults = styled.div`
  text-align: center;
  color: #666666;
  font-size: 14px;
  padding: 40px 20px;
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
`;

export const TestHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: #007AFF;
  cursor: pointer;
  padding: 8px;
  font-weight: 500;
  
  &:hover {
    color: #0056CC;
  }
`;

export const Progress = styled.span`
  font-size: 14px;
  color: #666666;
  font-weight: 500;
`;

export const QuestionContainer = styled.div`
  padding: 24px 20px;
  background-color: #ffffff;
  margin: 16px 20px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
`;

export const QuestionNumber = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #007AFF;
  margin: 0 0 12px 0;
`;

export const QuestionText = styled.p`
  font-size: 16px;
  color: #2c2c2c;
  line-height: 1.5;
  margin: 0;
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 0 20px;
`;

export const OptionButton = styled.button`
  padding: 16px;
  background-color: #ffffff;
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  font-size: 14px;
  color: #2c2c2c;
  cursor: pointer;
  text-align: left;
  transition: border-color 0.2s ease;
  
  &:hover {
    border-color: #007AFF;
  }
  
  &:active {
    border-color: #0056CC;
    background-color: #f8f9ff;
  }
`;

export const ProgressBar = styled.div`
  width: calc(100% - 40px);
  height: 4px;
  background-color: #e0e0e0;
  border-radius: 2px;
  margin: 24px 20px;
  overflow: hidden;
`;

export const ProgressFill = styled.div<{ width: number }>`
  height: 100%;
  background-color: #007AFF;
  width: ${props => props.width}%;
  transition: width 0.3s ease;
`;

export const ResultContainer = styled.div`
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 24px 20px;
  margin: 20px;
`;

export const ResultTitle = styled.h2`
  font-size: 20px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0 0 24px 0;
  text-align: center;
`;

export const ScoreSection = styled.div`
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

export const ScoreLabel = styled.div`
  font-size: 14px;
  color: #666666;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const ScoreDisplay = styled.div`
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const Score = styled.span`
  font-size: 32px;
  font-weight: 600;
  color: #2c2c2c;
`;

export const MaxScore = styled.span`
  font-size: 18px;
  color: #666666;
  margin-left: 4px;
`;

export const LevelSection = styled.div`
  text-align: center;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #f0f0f0;
`;

export const LevelLabel = styled.div`
  font-size: 14px;
  color: #666666;
  margin-bottom: 8px;
  font-weight: 500;
`;

export const LevelDisplay = styled.div<{ color: string }>`
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  background-color: ${props => props.color};
  padding: 8px 16px;
  border-radius: 6px;
`;

export const ResultDescription = styled.p`
  font-size: 14px;
  color: #2c2c2c;
  line-height: 1.5;
  margin: 0 0 24px 0;
  text-align: center;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 16px;
`;

export const PrimaryButton = styled.button`
  background: #007AFF;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background: #0056CC;
  }
  
  &:active {
    background: #004499;
  }
`;

export const SecondaryButton = styled.button`
  background: #ffffff;
  color: #007AFF;
  font-size: 14px;
  font-weight: 600;
  padding: 12px 20px;
  border: 1px solid #007AFF;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #f8f9ff;
  }
  
  &:active {
    background: #e8f0ff;
  }
`;

export const HelpButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 16px;
  border-top: 1px solid #f0f0f0;
`;

export const HelpButton = styled.button`
  background: #f8f9fa;
  color: #666666;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 16px;
  border: 1px solid #d0d0d0;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    background: #e9ecef;
    color: #495057;
  }
`;