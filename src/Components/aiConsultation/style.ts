// style.ts
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
  font-family: 'Pretendard', sans-serif;
`;

export const ChatBox = styled.div`
  width: 100%;
  max-width: 650px;
  height: 80vh;
  background-color: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const MessageList = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Message = styled.div<{ isUser: boolean }>`
  align-self: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
  background-color: ${(props) => (props.isUser ? "#d1d1d1" : "#e6e6e6")};
  color: #000;
  padding: 10px 14px;
  border-radius: 18px;
  max-width: 75%;
  word-break: break-word;
`;

export const InputWrapper = styled.div`
  display: flex;
  padding: 12px;
  border-top: 1px solid #ddd;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px 12px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  outline: none;
`;

export const SendButton = styled.button`
  margin-left: 8px;
  padding: 0 16px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  transition: background 0.2s;

  &:hover {
    background-color: #111;
  }
`;