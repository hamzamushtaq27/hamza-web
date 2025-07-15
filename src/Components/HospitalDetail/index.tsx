import { useParams } from "react-router-dom";
import { useState } from "react";
import { dummyHospitals } from "../../constants/dummyHospitals/dummyHospitals.constant";
import ReviewList from "../ReviewList";
import ReviewForm from "../ReviewForm";
import type { HospitalType } from "../FindHostpital";
import HospitalDetailInfo from "../HospitalDetailInfo";

const HospitalDetail = () => {
  const { id } = useParams<{ id: string }>();
  const hospital: HospitalType | undefined = dummyHospitals.find(
    (h) => h.id === Number(id)
  );

  console.log(id);

  const [reviews, setReviews] = useState<string[]>([]);

  const handleAddReview = (text: string) => {
    if (text.trim()) {
      setReviews((prev) => [...prev, text]);
    }
  };

  if (!hospital) return <div>해당 병원을 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <HospitalDetailInfo hospital={hospital} />

      <h3 style={{ marginTop: "30px" }}>리뷰</h3>
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
};

export default HospitalDetail;
