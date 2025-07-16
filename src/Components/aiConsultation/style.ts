import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #f5f5f5;
  overflow: hidden;
`;

export const Header = styled.div`
  padding: 24px 20px 16px 20px;
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
`;

export const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 600;
  color: #2c2c2c;
  margin: 0 0 4px 0;
`;

export const HeaderSubtitle = styled.p`
  font-size: 14px;
  color: #666666;
  margin: 0;
`;

export const ChatContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow: hidden;
`;

export const MessageList = styled.div`
  flex: 1;
  padding: 16px 20px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding-bottom: 20px;
`;

export const WelcomeMessage = styled.div`
  align-self: center;
  background-color: #f8f9fa;
  color: #666666;
  padding: 12px 20px;
  border-radius: 20px;
  font-size: 14px;
  margin: 20px 0;
  border: 1px solid #e9ecef;
`;

export const MessageWrapper = styled.div<{ isUser: boolean }>`
  display: flex;
  justify-content: ${(props) => (props.isUser ? "flex-end" : "flex-start")};
`;

export const Message = styled.div<{ isUser: boolean }>`
  background-color: ${(props) => (props.isUser ? "#007AFF" : "#ffffff")};
  color: ${(props) => (props.isUser ? "#ffffff" : "#2c2c2c")};
  padding: 12px 16px;
  border-radius: 18px;
  max-width: 75%;
  word-break: break-word;
  line-height: 1.4;
  font-size: 15px;
  border: ${(props) => (props.isUser ? "none" : "1px solid #e8e8e8")};
  box-shadow: ${(props) => (props.isUser ? "none" : "0 1px 2px rgba(0, 0, 0, 0.05)")};
`;

export const InputWrapper = styled.div`
  padding: 16px 20px 20px 20px;
  background-color: #ffffff;
  border-top: 1px solid #e0e0e0;
  padding-bottom: 80px;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #f8f9fa;
  border: 1px solid #e0e0e0;
  border-radius: 24px;
  padding: 4px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 12px 16px;
  font-size: 15px;
  border: none;
  background: transparent;
  outline: none;
  color: #2c2c2c;
  
  &::placeholder {
    color: #999999;
  }
`;

export const SendButton = styled.button`
  padding: 8px 16px;
  background-color: #007AFF;
  color: #ffffff;
  border: none;
  border-radius: 18px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  transition: all 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #0056CC;
  }
  
  &:active:not(:disabled) {
    background-color: #004499;
  }
  
  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;