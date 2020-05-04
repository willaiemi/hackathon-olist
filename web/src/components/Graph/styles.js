import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  max-height: 300px;
  display: flex;
  margin-bottom: 20px;
  overflow: hidden;

  border-radius: 37px;
  background: #fff;
  backdrop-filter: blur(30px);
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
`;

export const QuestionsContainer = styled.div`
  width: 200px;
  background: #0045ff;
  color: #FFF;
  
  padding: 44px 22px;
  border-top-left-radius: 37px;
  border-bottom-left-radius: 37px;
  border-bottom-right-radius: 37px;

  display: flex;
  align-items: center;
`;

export const StatisticText = styled.div`
  max-width: 12px;
  margin-right: 22px;
  margin-top: 44px;

  transform: rotate(-90deg);

  font-size: 12px;
  opacity: 0.58;
  line-height: 1.25;
  font-weight: bold;
`;

export const QuestionsCount = styled.div`
  div {
    display: flex;
    flex-direction: column;

    & + div {
      margin-top: 31px;
    }

    span {
      font-size: 12px;
      margin-bottom: 2px;
      font-weight: bold;
    }

    strong {
      font-size: 31px;
      line-height: 1.23;
    }
  }
`;

export const GraphContainer = styled.div`
  flex: 1;
  padding: 0 22px;

  p {
    margin: 22px 0;
    color: #252e48;
    font-weight: bold;
    font-size: 16px;
  }
`;

