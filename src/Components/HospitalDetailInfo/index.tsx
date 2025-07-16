import type { HospitalType } from "../FindHostpital";
import * as S from "./style";

interface Props {
  hospital: HospitalType;
}

const HospitalDetailInfo = ({ hospital }: Props) => {
  const formatOperatingHours = (openTime: any, closeTime: any) => {
    const open = `${String(openTime.hour).padStart(2, '0')}:${String(openTime.minute).padStart(2, '0')}`;
    const close = `${String(closeTime.hour).padStart(2, '0')}:${String(closeTime.minute).padStart(2, '0')}`;
    return `${open} - ${close}`;
  };

  const formatLunchHours = (lunchStart: any, lunchEnd: any) => {
    const start = `${String(lunchStart.hour).padStart(2, '0')}:${String(lunchStart.minute).padStart(2, '0')}`;
    const end = `${String(lunchEnd.hour).padStart(2, '0')}:${String(lunchEnd.minute).padStart(2, '0')}`;
    return `${start} - ${end}`;
  };

  return (
    <S.Container>
      <S.Header>
        <S.HospitalName>{hospital.name}</S.HospitalName>
        <S.StatusBadge isOpen={hospital.isOpen}>
          {hospital.isOpen ? "진료중" : "진료종료"}
        </S.StatusBadge>
      </S.Header>

      <S.DepartmentSection>
        <S.Department>{hospital.department}</S.Department>
      </S.DepartmentSection>

      <S.InfoSection>
        <S.SectionTitle>기본 정보</S.SectionTitle>
        <S.InfoCard>
          <S.InfoItem>
            <S.InfoLabel>주소</S.InfoLabel>
            <S.InfoValue>{hospital.address}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>전화번호</S.InfoLabel>
            <S.InfoValue>{hospital.phone}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>웹사이트</S.InfoLabel>
            <S.InfoValue>{hospital.website || "정보 없음"}</S.InfoValue>
          </S.InfoItem>
        </S.InfoCard>
      </S.InfoSection>

      <S.InfoSection>
        <S.SectionTitle>운영 시간</S.SectionTitle>
        <S.InfoCard>
          <S.InfoItem>
            <S.InfoLabel>진료시간</S.InfoLabel>
            <S.InfoValue>{formatOperatingHours(hospital.openTime, hospital.closeTime)}</S.InfoValue>
          </S.InfoItem>
          <S.InfoItem>
            <S.InfoLabel>점심시간</S.InfoLabel>
            <S.InfoValue>{formatLunchHours(hospital.lunchStart, hospital.lunchEnd)}</S.InfoValue>
          </S.InfoItem>
        </S.InfoCard>
      </S.InfoSection>

      <S.InfoSection>
        <S.SectionTitle>평가 및 리뷰</S.SectionTitle>
        <S.InfoCard>
          <S.RatingSection>
            <S.RatingIcon>★</S.RatingIcon>
            <S.RatingValue>{hospital.rating}</S.RatingValue>
            <S.ReviewCount>({hospital.userRatingsTotal}명의 리뷰)</S.ReviewCount>
          </S.RatingSection>
        </S.InfoCard>
      </S.InfoSection>

      <S.InfoSection>
        <S.SectionTitle>병원 소개</S.SectionTitle>
        <S.InfoCard>
          <S.Description>{hospital.description}</S.Description>
        </S.InfoCard>
      </S.InfoSection>

      {hospital.specializedTreatments && (
        <S.InfoSection>
          <S.SectionTitle>전문 치료</S.SectionTitle>
          <S.InfoCard>
            <S.InfoValue>{hospital.specializedTreatments}</S.InfoValue>
          </S.InfoCard>
        </S.InfoSection>
      )}

      <S.InfoSection>
        <S.SectionTitle>편의시설</S.SectionTitle>
        <S.InfoCard>
          <S.FeatureList>
            <S.FeatureItem available={hospital.isEmergency}>
              응급실 {hospital.isEmergency ? "운영" : "미운영"}
            </S.FeatureItem>
            <S.FeatureItem available={hospital.parkingAvailable}>
              주차장 {hospital.parkingAvailable ? "이용가능" : "이용불가"}
            </S.FeatureItem>
            <S.FeatureItem available={hospital.wheelchairAccessible}>
              휠체어 접근 {hospital.wheelchairAccessible ? "가능" : "불가"}
            </S.FeatureItem>
          </S.FeatureList>
        </S.InfoCard>
      </S.InfoSection>
    </S.Container>
  );
};

export default HospitalDetailInfo;