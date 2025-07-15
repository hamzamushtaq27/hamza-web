import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fafafa;
  padding: 20px;
`;

export const SignupBox = styled.div`
  width: 100%;
  max-width: 400px;
  background: white;
  padding: 48px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 32px;
  color: #1a1a1a;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #4a4a4a;
`;

export const Input = styled.input<{ hasError?: boolean }>`
  width: 100%;
  height: 44px;
  padding: 0 12px;
  font-size: 15px;
  border: 1px solid ${props => props.hasError ? '#dc2626' : '#e0e0e0'};
  border-radius: 6px;
  background-color: ${props => props.hasError ? '#fef2f2' : '#fafafa'};
  transition: all 0.2s ease;
  
  &:focus {
    outline: none;
    border-color: ${props => props.hasError ? '#dc2626' : '#3a3a3a'};
    background-color: ${props => props.hasError ? '#fef2f2' : 'white'};
  }
  
  &::placeholder {
    color: #a0a0a0;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 44px;
  margin-top: 16px;
  font-size: 15px;
  font-weight: 500;
  color: white;
  background-color: #1a1a1a;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover:not(:disabled) {
    background-color: #000;
  }
  
  &:disabled {
    background-color: #d0d0d0;
    cursor: not-allowed;
  }
`;

export const ErrorText = styled.span`
  font-size: 13px;
  color: #dc2626;
  margin-top: -2px;
`;

export const GeneralError = styled.div`
  font-size: 14px;
  color: #dc2626;
  padding: 12px;
  background-color: #fef2f2;
  border-radius: 6px;
  text-align: center;
`;

export const Footer = styled.div`
  margin-top: 24px;
  text-align: center;
`;

export const FooterText = styled.p`
  font-size: 14px;
  color: #6a6a6a;
  margin: 0;
  
  a {
    color: #1a1a1a;
    text-decoration: none;
    font-weight: 500;
    
    &:hover {
      text-decoration: underline;
    }
  }
`;