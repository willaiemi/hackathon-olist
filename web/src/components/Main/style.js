import styled from 'styled-components';

export const QuestionsInformation = styled.div`
  width: 100%;
  height: 80px;
  background: #0045ff;
  z-index: 1;
  position: relative;
  border-top-right-radius: 30px;
  display: flex;
  align-items: center;
`;

export const QuestionInformationColumn = styled.div`
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-left: 50px;
  height: 60%;

  h4 {
    font-size: 12px;
  }

  p {
    font-size: 25px;
    font-weight: bold;
  }
`;