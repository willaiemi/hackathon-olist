import styled from 'styled-components';

export const Container = styled.section`
  margin-left: 22px;
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