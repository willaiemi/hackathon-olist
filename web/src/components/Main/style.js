import styled from 'styled-components';

export const MainContainer = styled.div`
  height: calc(100vh - 170px); /* 78px header + 92px title = 170px */
  margin: 10px auto auto;
  max-width: 1280px;
  display: flex;
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.16);
  border-radius: 50px;
  /* \/ remove \/ */
  position: absolute;
  bottom: 0px;
  width: 100%;
  /* /\ remove /\ */
`;

export const MainContent = styled.div`
  height: 100%;
  width: 980px;
  padding: 34px 34px 0 34px;
  overflow: visible scroll;

  h2 {
    font-size: 32px;
    font-weight: normal;
  }
`;

export const LeftAlignedItemsRow = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ExportXLSXButton = styled.button`
  height: 30px;
  width: 120px;
  border: 1px solid #97a3b5;
  color: #97a3b5;
  background: white;
  border-radius: 24px;
  font-size: 14px;
`;

export const SelectGraphPeriod = styled.select`
  height: 30px;
  width: 100px;
  border: 1px solid black;
  color: black;
  background: white;
  border-radius: 24px;
  font-size: 15px;
`;

export const QuestionsInformation = styled.div`
  width: 100%;
  height: 80px;
  background: #0045ff;
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

export const Tab = styled.div`
  background: white;
  height: 60px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #63799b;
  font-size: 16px;
  border-radius: 30px 30px 0 0;
  margin-right: 10px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.57);
  font-weight: bold;
  cursor: pointer;

  ${props => props.active && `
    background: #0045ff;
    color: white;
    box-shadow: none;
  `}
`;

export const WhiteBox = styled.div`
  width: 100%;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
  padding: 22px 0;
  margin-bottom: 42px;
`;
