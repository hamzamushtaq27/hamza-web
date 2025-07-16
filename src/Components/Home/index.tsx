import * as S from "./style";

interface HomeProps {
  onGoToDiagnosis?: () => void;
}

const Home = ({ onGoToDiagnosis }: HomeProps) => {
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
      <S.Header>
        <S.HeaderTitle>진단 기록</S.HeaderTitle>
        <S.HeaderSubtitle>정신건강 진단 결과를 확인하세요</S.HeaderSubtitle>
      </S.Header>
      
      <S.CardList>
        {dummyData.map((item) => (
          <S.Card key={item.diagnosisId}>
            <S.CardHeader>
              <S.SeverityBadge $color={item.severityColor}>
                {item.severity}
              </S.SeverityBadge>
              <S.DiagnosisDate>
                {new Date(item.diagnosisDate).toLocaleDateString()}
              </S.DiagnosisDate>
            </S.CardHeader>
            
            <S.CardBody>
              <S.SeverityDescription>
                {item.severityDescription}
              </S.SeverityDescription>
              
              <S.ScoreSection>
                <S.ScoreLabel>진단 점수</S.ScoreLabel>
                <S.ScoreValue>{item.totalScore}점</S.ScoreValue>
              </S.ScoreSection>
              
              <S.RecommendationSection>
                <S.RecommendationLabel>권고사항</S.RecommendationLabel>
                <S.RecommendationText>{item.recommendation}</S.RecommendationText>
              </S.RecommendationSection>
              
              <S.NotesSection>
                <S.NotesLabel>메모</S.NotesLabel>
                <S.NotesText>{item.notes}</S.NotesText>
              </S.NotesSection>
              
              <S.ComparisonText>
                {item.scoreComparison}
              </S.ComparisonText>
            </S.CardBody>
          </S.Card>
        ))}
      </S.CardList>
      
      <S.DiagnosisButtonWrapper>
        <S.DiagnosisButton onClick={onGoToDiagnosis}>
          새로운 진단 시작하기
        </S.DiagnosisButton>
      </S.DiagnosisButtonWrapper>
    </S.HomeContainer>
  );
};

export default Home;