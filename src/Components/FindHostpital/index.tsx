import { useNavigate } from "react-router-dom";
import * as S from "./style";
import { dummyHospitals } from "../../constants/dummyHospitals/dummyHospitals.constant";

export interface HospitalType {
  id: number;
  name: string;
  address: string;
  phone: string;
  website: string;
  description: string;
  latitude: number;
  longitude: number;
  department: string;
  rating: number;
  operatingHours: string;
  openTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  closeTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  lunchStart: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  lunchEnd: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  isEmergency: boolean;
  isActive: boolean;
  parkingAvailable: boolean;
  wheelchairAccessible: boolean;
  specializedTreatments: string;
  distance: number;
  isOpen: boolean;
  googlePlaceId: string;
  userRatingsTotal: number;
}

interface FindHospitalProps {
  onHospitalClick?: (id: number) => void;
}

const FindHospital = ({ onHospitalClick }: FindHospitalProps) => {
  const navigate = useNavigate();

  const formatDistance = (distance: number) => {
    if (distance < 1) {
      return `${Math.round(distance * 1000)}m`;
    }
    return `${distance.toFixed(1)}km`;
  };

  const formatOperatingHours = (openTime: any, closeTime: any) => {
    const open = `${String(openTime.hour).padStart(2, '0')}:${String(openTime.minute).padStart(2, '0')}`;
    const close = `${String(closeTime.hour).padStart(2, '0')}:${String(closeTime.minute).padStart(2, '0')}`;
    return `${open} - ${close}`;
  };

  return (
    <S.Container>
      <S.Header>
        <S.HeaderTitle>병원 찾기</S.HeaderTitle>
        <S.HeaderSubtitle>가까운 정신건강 전문 병원을 찾아보세요</S.HeaderSubtitle>
      </S.Header>
      
      <S.HospitalList>
        {dummyHospitals.map((hospital) => (
          <S.HospitalCard
            key={hospital.id}
            onClick={() => {
              if (onHospitalClick) {
                onHospitalClick(hospital.id);
              } else {
                navigate(`/hospital/${hospital.id}`);
              }
            }}
          >
            <S.HospitalHeader>
              <S.HospitalName>{hospital.name}</S.HospitalName>
              <S.StatusBadge isOpen={hospital.isOpen}>
                {hospital.isOpen ? "진료중" : "진료종료"}
              </S.StatusBadge>
            </S.HospitalHeader>
            
            <S.HospitalDepartment>{hospital.department}</S.HospitalDepartment>
            
            <S.HospitalInfo>
              <S.InfoItem>
                <S.InfoLabel>주소</S.InfoLabel>
                <S.InfoValue>{hospital.address}</S.InfoValue>
              </S.InfoItem>
              
              <S.InfoItem>
                <S.InfoLabel>진료시간</S.InfoLabel>
                <S.InfoValue>{formatOperatingHours(hospital.openTime, hospital.closeTime)}</S.InfoValue>
              </S.InfoItem>
              
              <S.InfoItem>
                <S.InfoLabel>전화번호</S.InfoLabel>
                <S.InfoValue>{hospital.phone}</S.InfoValue>
              </S.InfoItem>
            </S.HospitalInfo>
            
            <S.HospitalFooter>
              <S.RatingSection>
                <S.RatingIcon>★</S.RatingIcon>
                <S.RatingValue>{hospital.rating}</S.RatingValue>
                <S.ReviewCount>({hospital.userRatingsTotal})</S.ReviewCount>
              </S.RatingSection>
              
              <S.DistanceSection>
                <S.DistanceValue>{formatDistance(hospital.distance)}</S.DistanceValue>
              </S.DistanceSection>
            </S.HospitalFooter>
            
            {(hospital.isEmergency || hospital.parkingAvailable || hospital.wheelchairAccessible) && (
              <S.FeatureSection>
                {hospital.isEmergency && <S.FeatureBadge>응급실</S.FeatureBadge>}
                {hospital.parkingAvailable && <S.FeatureBadge>주차가능</S.FeatureBadge>}
                {hospital.wheelchairAccessible && <S.FeatureBadge>휠체어접근</S.FeatureBadge>}
              </S.FeatureSection>
            )}
          </S.HospitalCard>
        ))}
      </S.HospitalList>
    </S.Container>
  );
};

export default FindHospital;