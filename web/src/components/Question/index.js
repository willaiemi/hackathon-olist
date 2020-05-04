import React from 'react';
import {
  QuestionContainer,
  ImageOuterContainer,
  QuestionContent,
  CustomTextareaAutosize,
  SendButton,
} from './style';

function Question() {
  return (
    <QuestionContainer>
      <ImageOuterContainer>
        <img src="https://olist-v2-dev.s3.amazonaws.com/products-images/821b814105e186976b67d56eb381a3a855f275c0.jpeg" />
      </ImageOuterContainer>

      <QuestionContent>
        <h4>BM275GC - Monitor Gamer Bluecase Led 27 Curvo</h4>
        <h3>Em quantas vezes posso fazer o monitor?</h3>
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
