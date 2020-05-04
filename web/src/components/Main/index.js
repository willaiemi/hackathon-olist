import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Graph from '../Graph';
import Question from '../Question';
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

function Main() {
  const [list, setList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
  const [tabName, setTabName] = useState('all');

  return (
    <MainContainer>
      <Sidebar
        tabActive={tabName}
        setTabActive={setTabName}
      ></Sidebar>
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
          
          <WhiteBox>
            {list.map((item) => (
              <Question
                key={item}
              />
            ))}
          </WhiteBox>
        
        </div>
      </MainContent>
    </MainContainer>
  );
}

export default Main;
