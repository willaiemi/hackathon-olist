import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { 
  MainContainer,
  MainContent,
  LeftAlignedItemsRow,
  ExportXLSXButton,
  SelectGraphPeriod,
  QuestionsInformation,
  QuestionInformationColumn,
  Tab,
  WhiteBox,
} from './style';
import Question from '../Question';

import Graph from '../Graph';

function Main() {

  const [list, setList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <MainContainer>
      <Sidebar></Sidebar>
      <MainContent>
        <LeftAlignedItemsRow>
          <ExportXLSXButton>
            Exportar
          </ExportXLSXButton>
        </LeftAlignedItemsRow>
        
        <h2>Todas as perguntas</h2>
        
        <LeftAlignedItemsRow>
          <SelectGraphPeriod>
            <option selected>Mensal</option>
          </SelectGraphPeriod>
        </LeftAlignedItemsRow>
        
        <Graph />
        
        {/* CAIXA DE PERGUNTAS */}
        <div>
          <div style={{ display: 'flex', }}>
            <Tab active>
              Perguntas pendentes
            </Tab>
            <Tab>
              Perguntas respondidas
            </Tab>
          </div>
          
          <QuestionsInformation>
            <QuestionInformationColumn>
              <h4>Perguntas pendentes</h4>
              <p>1.730</p>
            </QuestionInformationColumn>
            <QuestionInformationColumn>
              <h4>Neste mês</h4>
              <p>839</p>
            </QuestionInformationColumn>
            <QuestionInformationColumn>
              <h4>Hoje</h4>
              <p>309</p>
            </QuestionInformationColumn>
          </QuestionsInformation>
          
          {/* WHITE BOX */}
          <WhiteBox>
            {/* BUSCAR */}
            <div
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  height: '50px',
                  width: '70%',
                  margin: '20px 0',
                }}
              >
                <input 
                  style={{
                    height: '100%',
                    width: '100%',
                    paddingLeft: '20px',
                    border: 'none',
                    borderRadius: '50px',
                    boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
                    fontSize: '18px',
                  }}
                  type="text"
                  placeholder="Buscar pergunta"
                />
              </div>
            </div>
            {/* /BUSCAR */}
          
            {list.map((item) => (
              <Question
                key={item}
              />
            ))}
          </WhiteBox>
          {/* /WHITE BOX */}
        </div>
        {/* /CAIXA DE PERGUNTAS */}
      </MainContent>
    </MainContainer>
  );
}

export default Main;
