import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { dummyHospitals } from "../../constants/dummyHospitals/dummyHospitals.constant";
import ReviewList from "../ReviewList";
import ReviewForm from "../ReviewForm";
import type { HospitalType } from "../FindHostpital";
import HospitalDetailInfo from "../HospitalDetailInfo";

interface HospitalDetailProps {
  onGoToFindHospital?: () => void;
  hospitalId: number;
}

const HospitalDetail = ({
  onGoToFindHospital,
  hospitalId,
}: HospitalDetailProps) => {
  const hospital: HospitalType | undefined = dummyHospitals.find(
    (h) => h.id === hospitalId
  );

  const [reviews, setReviews] = useState<string[]>([]);

  const handleAddReview = (text: string) => {
    if (text.trim()) {
      setReviews((prev) => [...prev, text]);
    }
  };

  const navigate = useNavigate();

  if (!hospital) return <div>해당 병원을 찾을 수 없습니다.</div>;

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ position: "relative", height: 48, marginBottom: 24 }}>
        <button
          onClick={() => {
            if (onGoToFindHospital) {
              onGoToFindHospital();
            } else {
              navigate("/");
            }
          }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            background: "none",
            border: "none",
            fontSize: 28,
            cursor: "pointer",
            zIndex: 10,
          }}
          aria-label="뒤로가기"
        >
          ←
        </button>
      </div>
      <HospitalDetailInfo hospital={hospital} />

      <h3 style={{ marginTop: "30px" }}>리뷰</h3>
      <ReviewList reviews={reviews} />
      <ReviewForm onSubmit={handleAddReview} />
    </div>
  );
};

export default HospitalDetail;
