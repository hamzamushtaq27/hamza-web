import { useEffect, useRef, useState } from "react";
import * as S from "./style";
import axios from "axios";

interface ChatMessage {
  text: string;
  isUser: boolean;
}

const AiConsultation = () => {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: ChatMessage = { text: input, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInput("");

    try {
      const response = await axios.post("/api/chat/message", {
        message: input,
      });
      const data = response.data;

      const aiMessage: ChatMessage = { text: data.response, isUser: false };
      setMessages(prev => [...prev, aiMessage]);
    } catch {
      const errorMessage: ChatMessage = {
        text: "문제가 발생했어요. 다시 시도해주세요.",
        isUser: false,
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") sendMessage();
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
