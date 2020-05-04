import React from 'react';
import {
  QuestionContainer,
  ImageOuterContainer,
  ImageInnerContainer,
  QuestionContent,
  CustomTextareaAutosize,
  SendButton,
} from './style';

function Question() {
  return (
    <>
      <QuestionContainer>
        <ImageOuterContainer>
          <ImageInnerContainer>
          </ImageInnerContainer>
        </ImageOuterContainer>

        <QuestionContent>
          <h4>SKU - Máquina de lavar roupa 30" lorem ipsum lots of words now wow uhuu lorem ipsum lots of words now wow uhuu</h4>
          <h3>O que é isso?</h3>
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
    </>
  );
}

export default Question;
