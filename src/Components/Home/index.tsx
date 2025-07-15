import * as S from "./style";

interface HomeProps {
  onGoToDiagnosis?: () => void;
  onGoToFindHospital?: () => void;
}

const Home = ({ onGoToDiagnosis, onGoToFindHospital }: HomeProps) => {
  const dummyData = [
    {
      diagnosisId: 1,
      totalScore: 12,
      severity: "NORMAL",
      severityDescription: "중등도 - 중간 정도의 우울증 증상이 있습니다",
      recommendation: "전문가 상담을 받아보시기 바랍니다",
      severityColor: "#FF9800",
      diagnosisDate: "2025-07-15T21:36:17.874Z",
      scoreComparison: "이전 진단보다 2점 낮아졌습니다",
      requiresImmediateAttention: true,
      recommendedRediagnosisDays: 7,
      notes: "최근 스트레스가 많았습니다",
    },
    {
      diagnosisId: 2,
      totalScore: 5,
      severity: "LOW",
      severityDescription: "경미한 수준의 증상이 있습니다",
      recommendation: "생활 습관을 개선해보세요",
      severityColor: "#8BC34A",
      diagnosisDate: "2025-06-28T13:20:00.000Z",
      scoreComparison: "이전 진단보다 3점 낮아졌습니다",
      requiresImmediateAttention: false,
      recommendedRediagnosisDays: 14,
      notes: "운동과 수면을 꾸준히 유지하고 있음",
    },
    {
      diagnosisId: 3,
      totalScore: 18,
      severity: "HIGH",
      severityDescription: "고도 - 심한 우울증 증상이 의심됩니다",
      recommendation: "정신건강 전문의의 진료가 필요합니다",
      severityColor: "#F44336",
      diagnosisDate: "2025-06-10T09:50:00.000Z",
      scoreComparison: "이전 진단보다 4점 증가했습니다",
      requiresImmediateAttention: true,
      recommendedRediagnosisDays: 3,
      notes: "불면증과 식욕 저하를 호소함",
    },
  ];

  return (
    <S.HomeContainer>
      <S.CardList>
        {dummyData.map((item) => (
          <S.Card key={item.diagnosisId} $color={item.severityColor}>
            <div
              style={{
                fontWeight: "bold",
                fontSize: "18px",
                marginBottom: "8px",
              }}
            >
              {item.severityDescription}
            </div>
            <div>
              진단일: {new Date(item.diagnosisDate).toLocaleDateString()}
            </div>
            <div>점수: {item.totalScore}점</div>
            <div>권고: {item.recommendation}</div>
            <div>비고: {item.notes}</div>
            <div
              style={{
                marginTop: "8px",
                color: item.severityColor,
                fontWeight: "bold",
              }}
            >
              {item.severity}
            </div>
            <div style={{ fontSize: "12px", color: "#888" }}>
              {item.scoreComparison}
            </div>
          </S.Card>
        ))}
      </S.CardList>
      <S.DiagnosisButtonWrapper>
        <S.DiagnosisButton onClick={onGoToDiagnosis}>
          정신 건강 진단하러가기
        </S.DiagnosisButton>
      </S.DiagnosisButtonWrapper>
    </S.HomeContainer>
  );
};

export default Home;
