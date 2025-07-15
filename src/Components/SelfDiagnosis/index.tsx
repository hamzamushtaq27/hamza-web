
import { useState } from 'react';
import * as S from './style';

interface SurveyResult {
  id: number;
  date: string;
  score: number;
  level: string;
  totalQuestions: number;
}

const getLevelColor = (level: string) => {
  switch (level) {
    case '정상': return '#4CAF50';
    case '경미함': return '#FF9800';
    case '중등도': return '#FF5722';
    case '심각함': return '#F44336';
    default: return '#666';
  }
};

const SelfDiagnosis = () => {
  const [showTestPage, setShowTestPage] = useState(false);
  const [results, setResults] = useState<SurveyResult[]>([
    { id: 1, date: '2024-01-15', score: 8, level: '경미함', totalQuestions: 9 },
    { id: 2, date: '2024-01-01', score: 15, level: '중등도', totalQuestions: 9 },
    { id: 3, date: '2023-12-20', score: 5, level: '정상', totalQuestions: 9 },
  ]);

  const addResult = (score: number, level: string) => {
    const newResult: SurveyResult = {
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      score,
      level,
      totalQuestions: 9
    };
    setResults([newResult, ...results]);
  };

  if (showTestPage) {
    return <SelfDiagnosisTest onBack={() => setShowTestPage(false)} onSaveResult={addResult} />;
  }

  return (
    <S.Container>
      <S.Header>
        <S.Title>자가진단 검사</S.Title>
        <S.Subtitle>지난 2주간의 상태를 확인해보세요</S.Subtitle>
      </S.Header>

      <S.TestButton onClick={() => setShowTestPage(true)}>
        검사하러 가기
      </S.TestButton>

      <S.HistorySection>
        <S.HistoryTitle>이전 검사 결과</S.HistoryTitle>
        {results.length > 0 ? (
          <S.ResultsList>
            {results.map((result) => (
              <S.ResultItem key={result.id}>
                <S.ResultDate>{result.date}</S.ResultDate>
                <S.ResultScore>
                  점수: {result.score}/{result.totalQuestions * 3}
                </S.ResultScore>
                <S.ResultLevel color={getLevelColor(result.level)}>
                  {result.level}
                </S.ResultLevel>
              </S.ResultItem>
            ))}
          </S.ResultsList>
        ) : (
          <S.NoResults>아직 검사 결과가 없습니다.</S.NoResults>
        )}
      </S.HistorySection>
    </S.Container>
  );
};

interface Question {
  id: number;
  text: string;
}

interface SelfDiagnosisTestProps {
  onBack: () => void;
  onSaveResult: (score: number, level: string) => void;
}

const SelfDiagnosisTest = ({ onBack, onSaveResult }: SelfDiagnosisTestProps) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const questions: Question[] = [
    { id: 1, text: '지난 2주 동안 일 또는 다른 활동을 하는 데 흥미나 즐거움을 느끼지 못했다' },
    { id: 2, text: '지난 2주 동안 기분이 가라앉거나 우울하거나 절망적으로 느꼈다' },
    { id: 3, text: '지난 2주 동안 잠들기가 어렵거나 자주 깨거나 반대로 너무 많이 잠을 잤다' },
    { id: 4, text: '지난 2주 동안 피곤하다고 느끼거나 에너지가 거의 없었다' },
    { id: 5, text: '지난 2주 동안 자신에 대해 나쁘게 생각하거나 자신이 실패자라고 느꼈다' },
    { id: 6, text: '지난 2주 동안 신문을 읽거나 TV를 보는 것과 같은 일에 집중하는 것이 어려웠다' },
    { id: 7, text: '지난 2주 동안 다른 사람들이 눈치 챌 정도로 평소보다 말과 행동이 느려졌거나 반대로 평소보다 많이 움직여서 가만히 있을 수 없었다' },
    { id: 8, text: '지난 2주 동안 자신을 해치거나 죽었으면 좋겠다고 생각했다' },
    { id: 9, text: '지난 2주 동안 식욕이 감소하거나 증가했다' },
  ];

  const options = [
    { value: 0, label: '전혀 그렇지 않다' },
    { value: 1, label: '며칠 동안 그랬다' },
    { value: 2, label: '일주일 이상 그랬다' },
    { value: 3, label: '거의 매일 그랬다' },
  ];

  const handleAnswer = (value: number) => {
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const calculateResult = () => {
    const totalScore = answers.reduce((sum, answer) => sum + answer, 0);
    let level: string;
    
    if (totalScore <= 4) level = '정상';
    else if (totalScore <= 9) level = '경미함';
    else if (totalScore <= 14) level = '중등도';
    else level = '심각함';

    return { totalScore, level };
  };

  const handleRestart = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
  };

  if (showResult) {
    const { totalScore, level } = calculateResult();
    
    const handleBackToList = () => {
      onSaveResult(totalScore, level);
      onBack();
    };
    
    return (
      <S.Container>
        <S.ResultContainer>
          <S.ResultTitle>검사 결과</S.ResultTitle>
          <S.ScoreDisplay>
            <S.Score>{totalScore}</S.Score>
            <S.MaxScore>/ {questions.length * 3}</S.MaxScore>
          </S.ScoreDisplay>
          <S.LevelDisplay color={getLevelColor(level)}>
            {level}
          </S.LevelDisplay>
          <S.ResultDescription>
            {level === '정상' && '현재 상태가 양호합니다.'}
            {level === '경미함' && '가벼운 우울 증상이 있을 수 있습니다.'}
            {level === '중등도' && '중간 정도의 우울 증상이 있을 수 있습니다.'}
            {level === '심각함' && '심각한 우울 증상이 있을 수 있습니다. 전문가와 상담하시기 바랍니다.'}
          </S.ResultDescription>
          <S.ButtonGroup>
            <S.SecondaryButton onClick={handleRestart}>다시 검사</S.SecondaryButton>
            <S.PrimaryButton onClick={handleBackToList}>목록으로</S.PrimaryButton>
          </S.ButtonGroup>
        </S.ResultContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <S.TestHeader>
        <S.BackButton onClick={onBack}>← 뒤로</S.BackButton>
        <S.Progress>
          {currentQuestion + 1} / {questions.length}
        </S.Progress>
      </S.TestHeader>

      <S.QuestionContainer>
        <S.QuestionNumber>질문 {currentQuestion + 1}</S.QuestionNumber>
        <S.QuestionText>{questions[currentQuestion].text}</S.QuestionText>
      </S.QuestionContainer>

      <S.OptionsContainer>
        {options.map((option) => (
          <S.OptionButton
            key={option.value}
            onClick={() => handleAnswer(option.value)}
          >
            {option.label}
          </S.OptionButton>
        ))}
      </S.OptionsContainer>

      <S.ProgressBar>
        <S.ProgressFill width={(currentQuestion / questions.length) * 100} />
      </S.ProgressBar>
    </S.Container>
  );
};

export default SelfDiagnosis;