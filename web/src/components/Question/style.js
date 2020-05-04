import styled from 'styled-components';
import TextareaAutosize from 'react-textarea-autosize';

export const QuestionContainer = styled.div`
  width: 100%;
  padding: 22px 0;
  margin-bottom: 22px;

  display: flex;
  align-items: flex-start;
  padding-top: 5px;
`;

export const ImageOuterContainer = styled.div`
  width: 15%;
  margin: 0 20px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
  }
`;

export const QuestionContent = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  padding-top: 5px;

  h4 {
    color: #a3a3a3;
    font-size: 15px;
  }

  h3 {
    color: #0045ff;
    font-size: 18px;
    margin-top: 10px;
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

export const CustomTextareaAutosize = styled(TextareaAutosize)`
  border: none;
  width: 75%;
  outline: none;
  font-size: 18px;
  border-bottom: 2px solid #0045ff;
  resize: none;
  padding: 4px 0;
`;

export const SendButton = styled.button`
  border: none;
  background: #0045ff;
  color: white;
  width: 20%;
  height: 32px;
  font-size: 18px;
  border-radius: 15px;
  align-self: flex-end;
  cursor: pointer;
`;

export const WithoutAnyQuestion = styled.p`
  width: 100%;
  text-align: center;

  color: #252e48;
  font-weight: bold;
  font-size: 16px;
`;