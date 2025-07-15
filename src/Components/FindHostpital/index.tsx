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

  return (
    <S.FindHostpitalContainer>
      <S.PageHeaderTextt>병원 찾기</S.PageHeaderTextt>
      <S.HostpitalInfoWrapper>
        {dummyHospitals.map((hospital, index) => (
          <S.HospitalInfo
            key={index}
            onClick={() => {
              if (onHospitalClick) {
                onHospitalClick(hospital.id);
              } else {
                navigate(`/hospital/${hospital.id}`);
              }
            }}
          >
            <S.HospitalTitle>
              {hospital.name}
              <span>{hospital.department}</span>
            </S.HospitalTitle>
            ★ {hospital.rating}
          </S.HospitalInfo>
        ))}
      </S.HostpitalInfoWrapper>
    </S.FindHostpitalContainer>
  );
};

export default FindHospital;
