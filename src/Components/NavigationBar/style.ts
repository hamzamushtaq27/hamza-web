import styled from "styled-components";

export const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;

  background-color: white;
  border-top: 1px solid #e0e0e0;
  z-index: 1000;
  width: 100%;
  height: 60px;
  display: flex;
`;

export const MenuItem = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  color: #6c757d;
`;

export const ActiveBar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: #007bff;
`;

export const IconWrapper = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
  }
`;