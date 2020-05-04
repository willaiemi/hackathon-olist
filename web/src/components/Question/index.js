import React, { useRef, useEffect, useState, useCallback } from 'react';
import {
  QuestionContainer,
  ImageOuterContainer,
  QuestionContent,
  CustomTextareaAutosize,
  SendButton,
  Suggestion,
  AnswerContainer,
  WithoutAnyQuestion,
} from './style';

function Question({ item, sendAnswer }) {
  const answerFieldRef = useRef(null);
  const [textareaHeight, setTextareaHeight] = useState('');
  const [isAnswerFocused, setIsAnswerFocused] = useState(false);
  const [answer, setAnswer] = useState('');

  const onChangeHeight = useCallback(
    (height) => {
      setTextareaHeight(height);
    },
    [setTextareaHeight],
  );

  const onChange = useCallback(
    ({ target: { value } }) => {
      setAnswer(value);
    },
    [setAnswer],
  )

  const chooseSuggestion = useCallback(
    () => {
      setAnswer(item.suggestion);
    },
    [setAnswer, item],
  );

  return (
    <QuestionContainer>
      {item ? (
        <>
          <ImageOuterContainer>
            <img src={item.img} />
          </ImageOuterContainer>

          <QuestionContent>
            <h4>{item.title}</h4>
            <h3>{item.question}</h3>
            <AnswerContainer>
              <CustomTextareaAutosize
                type="text"
                ref={answerFieldRef}
                onFocus={() => { setIsAnswerFocused(true) }}
                onBlur={() => { setIsAnswerFocused(false) }}
                onHeightChange={onChangeHeight}
                placeholder="Digite sua resposta"
                onChange={onChange}
                value={answer}
              ></CustomTextareaAutosize>
              <Suggestion
                textareaHeight={textareaHeight}
                isFocused={isAnswerFocused}
                onClick={chooseSuggestion}
              >
                {item.suggestion}
              </Suggestion>
              <SendButton onClick={() => sendAnswer(item.id)}>
                Enviar
              </SendButton>
            </AnswerContainer>
          </QuestionContent>
        </>
      ) : (
        <WithoutAnyQuestion>Sem perguntas nessa categoria</WithoutAnyQuestion>
      )}
    </QuestionContainer>
  );
}

export default Question;
