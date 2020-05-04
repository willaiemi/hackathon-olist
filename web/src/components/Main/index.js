import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import { QuestionInformationColumn, QuestionsInformation } from './style';
import Question from '../Question';

import Graph from '../Graph';

function Main() {

  const [list, setList] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  return (
    <div
      style={{
        height: 'calc(100vh - 170px)', // 78px header + 92px title = 170px
        // background: 'rgba(255, 255, 0, 0.1)',
        margin: '10px auto auto',
        maxWidth: '1280px',
    // \/ remove \/
        position: 'absolute',
        bottom: '0px',
        width: '100%',
    // /\ remove /\
        display: 'flex',
        // overflowX: 'visible',
      }}
    >
      <Sidebar></Sidebar>
      <div
        style={{
          height: '100%',
          width: '980px',
          // background: 'rgba(0, 255, 0, 0.1)',
          padding: '34px 34px 0 34px',
          overflow: 'visible scroll',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            style={{
              height: '30px',
              width: '120px',
              border: '1px solid #97a3b5',
              color: '#97a3b5',
              background: 'white',
              borderRadius: '24px',
              fontSize: '14px',
            }}
          >
            Exportar
          </button>
        </div>
        <h2
          style={{
            fontSize: '32px',
            fontWeight: 'normal',
          }}
        >Todas as perguntas</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}
        >
          <button
            style={{
              height: '30px',
              width: '100px',
              border: '1px solid black',
              color: 'black',
              background: 'white',
              borderRadius: '24px',
              fontSize: '15px',
            }}
          >
            Mensal
          </button>
        </div>
        
        {/* CAIXA DE PERGUNTAS */}
        <div> 
          {/* ABAS */}
          <div
            style={{
              display: 'flex',
            }}
          >
            <div
              style={{
                background: '#0045ff',
                height: '60px',
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontSize: '16px',
                borderRadius: '30px 30px 0 0',
                fontWeight: 'bold',
              }}
            >
              Perguntas pendentes
            </div>
            <div
              style={{
                background: 'white',
                height: '60px',
                width: '200px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: '#63799b',
                fontSize: '16px',
                borderRadius: '30px 30px 0 0',
                marginLeft: '10px',
                boxShadow: '0 3px 6px 0 black',
                zIndex: '1',
                fontWeight: 'bold',
              }}
            >
              Perguntas respondidas
            </div>
          </div>
          {/* /ABAS */}
          
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
          <div
            style={{
              width: '100%',
              boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',

            }}
          >
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
          </div>
          {/* /WHITE BOX */}
        </div>
        {/* /CAIXA DE PERGUNTAS */}
      </div>
    </div>
  );
}

export default Main;
