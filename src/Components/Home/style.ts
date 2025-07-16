//style.ts
import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow-y: auto;
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
  margin: 0 0 4px 0;
`;

export const HeaderSubtitle = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 0;
`;

export const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
`;

export const Card = styled.div`
  background: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px 12px 20px;
  border-bottom: 1px solid #f0f0f0;
`;

export const SeverityBadge = styled.span<{ $color: string }>`
  background-color: ${(props) => props.$color};
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DiagnosisDate = styled.span`
  font-size: 13px;
  color: #666666;
  font-weight: 500;
`;

export const CardBody = styled.div`
  padding: 16px 20px 20px 20px;
`;

export const SeverityDescription = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #2c2c2c;
  margin-bottom: 16px;
  line-height: 1.4;
`;

export const ScoreSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f5f5f5;
`;

export const ScoreLabel = styled.span`
  font-size: 14px;
  color: #666666;
  font-weight: 500;
`;

export const ScoreValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: #2c2c2c;
`;

export const RecommendationSection = styled.div`
  margin-top: 16px;
`;

export const RecommendationLabel = styled.div`
  font-size: 13px;
  color: #666666;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const RecommendationText = styled.div`
  font-size: 14px;
  color: #2c2c2c;
  line-height: 1.4;
`;

export const NotesSection = styled.div`
  margin-top: 16px;
`;

export const NotesLabel = styled.div`
  font-size: 13px;
  color: #666666;
  font-weight: 500;
  margin-bottom: 6px;
`;

export const NotesText = styled.div`
  font-size: 14px;
  color: #2c2c2c;
  line-height: 1.4;
`;

export const ComparisonText = styled.div`
  font-size: 13px;
  color: #888888;
  margin-top: 16px;
  padding-top: 12px;
  border-top: 1px solid #f5f5f5;
  font-style: italic;
`;

export const DiagnosisButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 24px 20px 80px 20px;
`;

export const DiagnosisButton = styled.button`
  background: #007AFF;
  color: #ffffff;
  font-size: 16px;
  font-weight: 600;
  padding: 14px 32px;
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