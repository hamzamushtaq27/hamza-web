import styled from "styled-components";

export const FindHostpitalContainer = styled.div`
  width: 100%;
  padding: 48px 24px 96px 24px;
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

export const PageHeaderTextt = styled.p`
  font-size: 32px;
  font-weight: bold;
`;

export const HostpitalInfoWrapper = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-direction: column;
`;

export const HospitalInfo = styled.div`
  color: skyblue;
  background-color: white;
  border-radius: 8px;
  display: flex;
  padding: 16px 24px;
  justify-content: space-between;
`;

export const HospitalTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: black;
  font-size: 16px;

  span {
    color: gray;
  }
`;
