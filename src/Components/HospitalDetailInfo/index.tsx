import type { HospitalType } from "../FindHostpital";


interface Props {
  hospital: HospitalType;
}

const HospitalDetailInfo = ({ hospital }: Props) => (
  <div>
    <h2>{hospital.name}</h2>
    <p><strong>진료과:</strong> {hospital.department}</p>
    <p><strong>주소:</strong> {hospital.address}</p>
    <p><strong>전화번호:</strong> {hospital.phone}</p>
    <p><strong>운영시간:</strong> {hospital.operatingHours}</p>
    <p><strong>설명:</strong> {hospital.description}</p>
    <p><strong>평점:</strong> ⭐ {hospital.rating} ({hospital.userRatingsTotal}명)</p>
  </div>
);

export default HospitalDetailInfo;
