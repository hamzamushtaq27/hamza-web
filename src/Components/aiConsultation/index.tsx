import { useEffect, useRef, useState } from "react";
import * as S from "./style";

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const AiConsultation = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const isSendingRef = useRef(false);

  const dummyAnswers = [
    "안녕하세요! 무엇을 도와드릴까요?",
    "증상을 좀 더 자세히 말씀해주실 수 있나요?",
    "해당 증상은 우울증일 수 있습니다. 충분한 휴식을 취하세요.",
    "필요하다면 가까운 병원을 방문해보세요.",
    "추가로 궁금한 점이 있으신가요?",
  ];
  const answerIndexRef = useRef(0);

  const sendMessage = async () => {
    if (isSendingRef.current) return;
    isSendingRef.current = true;
    if (!input.trim()) {
      isSendingRef.current = false;
      return;
    }

    const userMessage: ChatMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    // 더미 답변 반환
    const aiText = dummyAnswers[answerIndexRef.current];
    if (answerIndexRef.current < dummyAnswers.length - 1) {
      answerIndexRef.current += 1;
    }
    const aiMessage: ChatMessage = { text: aiText, isUser: false };
    setTimeout(() => {
      setMessages((prev) => [...prev, aiMessage]);
      isSendingRef.current = false;
    }, 500); // 0.5초 후 답변 시뮬레이션
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <S.Container>
      <S.ChatBox>
        <S.MessageList>
          {messages.map((msg, idx) => (
            <S.Message key={idx} isUser={msg.isUser}>
              {msg.text}
            </S.Message>
          ))}
          <div ref={messagesEndRef} />
        </S.MessageList>
        <S.InputWrapper>
          <S.Input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="메시지를 입력하세요..."
          />
          <S.SendButton onClick={sendMessage}>전송</S.SendButton>
        </S.InputWrapper>
      </S.ChatBox>
    </S.Container>
  );
};

export default AiConsultation;
