import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.div`
  margin-top: 40px;
  border-radius: 25px;
  background-color: #fef38e;
  box-sizing: border-box;
  max-width: 704px;
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const TextForgetPassword = styled.label`
  margin-top: 50px;
  margin-left: 50px;
  margin-bottom: 50px;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;
  display: flex;
  align-items: center;
  text-decoration-line: underline;
  color: #4267b2;
  align-self: flex-start;
`;

export const Footer = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  width: 100%;
`;

export const ElementContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  flex-direction: column;

  label {
    font-weight: bold;
    color: #858585;
  }
`;
