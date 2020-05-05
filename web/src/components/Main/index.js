import React, { useState, useEffect, useCallback } from 'react';
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
import iconXLSX from '../../assets/icon-xlsx.svg';
import { MOCK_QUESTIONS } from '../../helpers/constants';

function Main() {
  const [list, setList] = useState(MOCK_QUESTIONS);

  const sendAnswer = useCallback(
    (id) => {
      setList(list.map(item => ({
        ...item,
        answered: item.id === id,
      })));
    },
    [list, setList],
  );

  const [tabName, setTabName] = useState('all');
  const [tabTitle, setTabTitle] = useState('Todas as perguntas');
  const [isPendingTab, setIsPendingTab] = useState(false);

  useEffect(() => {
    switch (tabName) {
      case 'all':
        setTabTitle('Todas as perguntas');
        break;
      case 'delivery':
        setTabTitle('Perguntas sobre entrega');
        break;
      case 'payment':
        setTabTitle('Perguntas sobre pagamento');
        break;
      case 'cancellation':
        setTabTitle('Perguntas sobre cancelamento');
        break;
      case 'description':
        setTabTitle('Perguntas sobre descrição do produto');
        break;
      case 'functionality':
        setTabTitle('Perguntas sobre funcionalidade do produto');
        break;
      default:
    }
  }, [tabName]);

  const renderQuestions = useCallback(() => {
    const listItems = list.filter(
      item => (item.type === tabName || tabName === 'all') && (!isPendingTab !== !item.answered)
    );

    if (listItems.length) {
      return listItems.map(item => (
        <Question key={item.id} item={item} sendAnswer={sendAnswer} />
      ));
    } else {
      return (
        <Question key={null} item={null} />
      );
    }
  }, [tabName, list, isPendingTab, sendAnswer]);

  useEffect(() => {
    renderQuestions();
  }, [tabName, isPendingTab, renderQuestions]);

  return (
    <MainContainer>
      <Sidebar
        tabActive={tabName}
        setTabActive={setTabName}
      ></Sidebar>
      <MainContent>
        <LeftAlignedItemsRow>
          <ExportXLSXButton>
            <img src={iconXLSX} alt="Ícone do Microsoft Excel" />
            <span>Exportar</span>
          </ExportXLSXButton>
        </LeftAlignedItemsRow>

        <h2>{tabTitle}</h2>

        <LeftAlignedItemsRow>
          <SelectGraphPeriod value="mensal">
            <option value="mensal">Mensal</option>
            <option value="semanal">Semanal</option>
          </SelectGraphPeriod>
        </LeftAlignedItemsRow>

        <Graph graphData={tabName} />

        <div>
          <div style={{ display: 'flex', }}>
            <Tab
              onClick={() => { setIsPendingTab(true) }}
              active={isPendingTab}
            >
              Perguntas pendentes
            </Tab>
            <Tab
              onClick={() => { setIsPendingTab(false) }}
              active={!isPendingTab}
            >
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
            {renderQuestions()}
          </WhiteBox>
        </div>
      </MainContent>
    </MainContainer>
  );
}

export default Main;
