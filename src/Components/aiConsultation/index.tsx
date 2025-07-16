import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import { chatbot } from "../../api/chatbotAPI"; // 실제 경로에 맞게 수정하세요

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const AiConsultation = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const isSendingRef = useRef(false);

  const sessionId = 123; // 필요시 prop이나 context로 관리 가능

  const sendMessage = async () => {
    if (isSendingRef.current || !input.trim()) return;
    isSendingRef.current = true;

    const userMessage: ChatMessage = { text: input, isUser: true };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");

    try {
      const response = await chatbot({
        message: input,
        sessionId,
        isEmergency: false,
      });

      const aiText = response.data.response ?? "죄송해요, 답변을 불러올 수 없어요.";
      const aiMessage: ChatMessage = { text: aiText, isUser: false };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error("메시지 전송 실패:", error);
      const errorMessage: ChatMessage = {
        text: "서버 오류가 발생했어요. 잠시 후 다시 시도해주세요.",
        isUser: false,
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      isSendingRef.current = false;
    }
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
      <S.Header>
        <S.HeaderTitle>AI 상담</S.HeaderTitle>
        <S.HeaderSubtitle>언제든지 편하게 대화해보세요</S.HeaderSubtitle>
      </S.Header>
      
      <S.ChatContent>
        <S.MessageList>
          {messages.length === 0 && (
            <S.WelcomeMessage>
              안녕하세요! 무엇을 도와드릴까요?
            </S.WelcomeMessage>
          )}
          {messages.map((msg, idx) => (
            <S.MessageWrapper key={idx} isUser={msg.isUser}>
              <S.Message isUser={msg.isUser}>
                {msg.text}
              </S.Message>
            </S.MessageWrapper>
          ))}
          <div ref={messagesEndRef} />
        </S.MessageList>
        
        <S.InputWrapper>
          <S.InputContainer>
            <S.Input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="메시지를 입력하세요..."
            />
            <S.SendButton 
              onClick={sendMessage}
              disabled={!input.trim() || isSendingRef.current}
            >
              전송
            </S.SendButton>
          </S.InputContainer>
        </S.InputWrapper>
      </S.ChatContent>
    </S.Container>
  );
};

export default AiConsultation;