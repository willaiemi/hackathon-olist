import React from 'react';
import {
  QuestionContainer,
  ImageOuterContainer,
  QuestionContent,
  CustomTextareaAutosize,
  SendButton,
} from './style';

function Question({ item }) {
  return (
    <QuestionContainer>
      <ImageOuterContainer>
        <img src={item.img} />
      </ImageOuterContainer>

      <QuestionContent>
        <h4>{item.title}</h4>
        <h3>{item.question}</h3>
        <div>
          <CustomTextareaAutosize
            type="text"
            placeholder="Digite sua resposta"
          ></CustomTextareaAutosize>
          <SendButton>
            Enviar
          </SendButton>
        </div>
      </QuestionContent>
    </QuestionContainer>
  );
}

export default Question;
