import styled from "styled-components";

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
  padding: 24px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const HospitalName = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0;
  flex: 1;
  margin-right: 16px;
`;

export const StatusBadge = styled.span<{ isOpen: boolean }>`
  background-color: ${props => props.isOpen ? '#4CAF50' : '#F44336'};
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 6px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const DepartmentSection = styled.div`
  padding: 16px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

export const Department = styled.div`
  font-size: 16px;
  color: #666666;
  font-weight: 500;
`;

export const InfoSection = styled.div`
  margin: 16px 20px 0 20px;
`;

export const SectionTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0 0 8px 0;
`;

export const InfoCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

export const InfoLabel = styled.span`
  font-size: 14px;
  color: #666666;
  font-weight: 500;
  min-width: 80px;
  flex-shrink: 0;
`;

export const InfoValue = styled.span`
  font-size: 14px;
  color: #2c2c2c;
  line-height: 1.4;
  flex: 1;
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const RatingIcon = styled.span`
  color: #FFB800;
  font-size: 20px;
`;

export const RatingValue = styled.span`
  font-size: 18px;
  font-weight: 600;
  color: #2c2c2c;
`;

export const ReviewCount = styled.span`
  font-size: 14px;
  color: #666666;
`;

export const Description = styled.p`
  font-size: 14px;
  color: #2c2c2c;
  line-height: 1.6;
  margin: 0;
`;

export const FeatureList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const FeatureItem = styled.div<{ available: boolean }>`
  display: flex;
  align-items: center;
  font-size: 14px;
  color: ${props => props.available ? '#2c2c2c' : '#888888'};
  
  &::before {
    content: '${props => props.available ? '✓' : '✗'}';
    color: ${props => props.available ? '#4CAF50' : '#F44336'};
    font-weight: bold;
    margin-right: 8px;
    width: 16px;
  }
`;