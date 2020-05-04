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

function Main() {
  const [list, setList] = useState([
    {
      id: 1,
      img: 'https://olist-v2-dev.s3.amazonaws.com/products-images/821b814105e186976b67d56eb381a3a855f275c0.jpeg',
      title: 'BM275GC - Monitor Gamer Bluecase Led 27 Curvo',
      question: 'Em quantas vezes posso fazer o monitor?',
      type: 'payment',
      suggestion: 'Você pode fazer o pagamento em até 6x sem juros. Você pode fazer o pagamento em até 6x sem juros. Você pode fazer o pagamento em até 6x sem juros. Você pode fazer o pagamento em até 6x sem juros.',
    },
    {
      id: 2,
      img: 'https://olist-v2-dev.s3.amazonaws.com/products-images/d2f3973f-5acd-4346-9f09-a3df6b3091db.jpg',
      title: 'TG997MC - Teclado Gamer Multimídia CHROMATIC GK-710 LED Fortrek',
      question: 'Posso pagar com cartão de crédito?',
      type: 'payment',
      suggestion: 'Sim, temos a opção de pagamento com cartão de crédito.',
    },
    {
      id: 3,
      img: 'https://olist-v2-dev.s3.amazonaws.com/products-images/0c9f34e4489441be8837abe68b0f6bbcc58a5521.jpeg',
      title: 'CI544WW - Carregador Para Iphone X 5W Usb Power Lightning',
      question: 'Vocês aceitam boleto?',
      type: 'payment',
      suggestion: 'No momento o Mercado Livre não está aceitando boleto.',
    }
  ]);

  const [tabName, setTabName] = useState('all');
  const [tabTitle, setTabTitle] = useState('Todas as perguntas');

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
    const listItems = list.filter(item => item.type === tabName || tabName === 'all');

    if (listItems.length) {
      return listItems.map(item => {
        return (
          <Question key={item.id} item={item} />  
        );
      })
    } else {
      return (
        <Question key={null} item={null} />  
      );
    }

  }, [tabName]);

  useEffect(() => {
    renderQuestions();
  }, [tabName]);

  return (
    <MainContainer>
      <Sidebar
        tabActive={tabName}
        setTabActive={setTabName}
      ></Sidebar>
      <MainContent>
        <LeftAlignedItemsRow>
          <ExportXLSXButton>
            <img src={iconXLSX} />
            <span>Exportar</span>
          </ExportXLSXButton>
        </LeftAlignedItemsRow>
        
        <h2>{tabTitle}</h2>
        
        <LeftAlignedItemsRow>
          <SelectGraphPeriod>
            <option selected>Mensal</option>
          </SelectGraphPeriod>
        </LeftAlignedItemsRow>
        
        <Graph graphData={tabName} />
        
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
            {renderQuestions()}
          </WhiteBox>
        
        </div>
      </MainContent>
    </MainContainer>
  );
}

export default Main;
