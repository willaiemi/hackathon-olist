import React from 'react';

import { Container, QuestionsContainer, QuestionsCount, StatisticText } from './styles';

function Graph() {
  return (
    <Container>
      <QuestionsContainer>
        <StatisticText>
          <small>Estatísticas</small>
        </StatisticText>
        <QuestionsCount>
          <div>
            <span>Total de Perguntas</span>
            <strong>72.593</strong>
          </div>
          <div>
            <span>Neste mês</span>
            <strong>9.307</strong>
          </div>
          <div>
            <span>Hoje</span>
            <strong>1.328</strong>
          </div>
        </QuestionsCount>
      </QuestionsContainer>

      {/* <GraphContainer>

      </GraphContainer> */}
    </Container>
  );
}

export default Graph;