import React from 'react';
import { Line } from 'react-chartjs-2';

import { Container, QuestionsContainer, QuestionsCount, StatisticText, GraphContainer } from './styles';

import { options, datasetsColor, labelType } from './chartConfigs';

function Graph({ label = 'month' }) {
  const data = {
    labels: labelType[label],
    datasets: [
      {
        ...datasetsColor,
        data: [
          65, 59, 80, 81, 56, 55, 40,
          22, 32, 42, 52, 62, 72, 39,
          65, 59, 80, 81, 56, 55, 40,
          65, 59, 80, 81, 56, 55, 40,
          10, 5,
        ]
      }
    ],
  };

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

      <GraphContainer>
        <p>Número total de Perguntas</p>
        <Line data={data} options={options} height={100} />
      </GraphContainer>
    </Container>
  );
}

export default Graph;