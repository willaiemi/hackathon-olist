import React, { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { Container, QuestionsContainer, QuestionsCount, StatisticText, GraphContainer } from './styles';

import { options, datasetsColor, labelType, dataConfig } from './chartConfigs';

function Graph({ label = 'month', graphData }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataConfig[graphData]);
  }, [graphData]);

  const dataChart = {
    labels: labelType[label],
    datasets: [
      {
        ...datasetsColor,
        data,
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
        <Line data={dataChart} options={options} height={100} />
      </GraphContainer>
    </Container>
  );
}

export default Graph;