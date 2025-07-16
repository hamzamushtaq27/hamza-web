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

export const HospitalList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 20px;
`;

export const HospitalCard = styled.div`
  background-color: #ffffff;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  padding: 16px;
  cursor: pointer;
  transition: all 0.2s ease;
  
  &:hover {
    border-color: #d0d0d0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  }
  
  &:active {
    transform: translateY(1px);
  }
`;

export const HospitalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 8px;
`;

export const HospitalName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0;
  flex: 1;
  margin-right: 12px;
`;

export const StatusBadge = styled.span<{ isOpen: boolean }>`
  background-color: ${props => props.isOpen ? '#4CAF50' : '#F44336'};
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  padding: 4px 8px;
  border-radius: 4px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

export const HospitalDepartment = styled.div`
  font-size: 14px;
  color: #666666;
  margin-bottom: 16px;
  font-weight: 500;
`;

export const HospitalInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

export const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
`;

export const InfoLabel = styled.span`
  font-size: 13px;
  color: #888888;
  font-weight: 500;
  min-width: 60px;
  flex-shrink: 0;
`;

export const InfoValue = styled.span`
  font-size: 13px;
  color: #2c2c2c;
  line-height: 1.4;
`;

export const HospitalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 12px;
  border-top: 1px solid #f0f0f0;
  margin-bottom: 12px;
`;

export const RatingSection = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const RatingIcon = styled.span`
  color: #FFB800;
  font-size: 14px;
`;

export const RatingValue = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: #2c2c2c;
`;

export const ReviewCount = styled.span`
  font-size: 12px;
  color: #888888;
`;

export const DistanceSection = styled.div`
  display: flex;
  align-items: center;
`;

export const DistanceValue = styled.span`
  font-size: 13px;
  color: #666666;
  font-weight: 500;
`;

export const FeatureSection = styled.div`
  display: flex;
  gap: 6px;
  flex-wrap: wrap;
`;

export const FeatureBadge = styled.span`
  background-color: #f8f9fa;
  color: #495057;
  font-size: 11px;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #e9ecef;
`;