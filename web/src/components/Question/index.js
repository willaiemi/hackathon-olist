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

function Question({ item }) {
  const suggestionRef = useRef(null);
  const answerFieldRef = useRef(null);
  const [suggestionOffsetHeight, setSuggestionOffsetHeight] = useState('');
  const [isAnswerFocused, setIsAnswerFocused] = useState(false);
  const [answer, setAnswer] = useState('');

  useEffect(
    () => {
      console.log("Teste", isAnswerFocused);
      // setIsAnswerFocused(answerFieldRef.current.)
    },
    [isAnswerFocused],
  );

  useEffect(
    () => {
      setSuggestionOffsetHeight(suggestionRef?.current?.offsetHeight);
    },
    [suggestionRef],
  );

  const onChange = useCallback(
    ({ target: { value } }) => {
      setAnswer(value);
    },
    [setAnswer],
  )

  const chooseSuggestion = useCallback(
    () => {
      console.log("SUGEST˜AO: ", item.suggestion);
      setAnswer(item.suggestion);
    },
    [setAnswer, item.suggestion],
  );

  console.log('answer:', answer)

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
                onFocus={() => setIsAnswerFocused(true)}
                onBlur={() => {
                  console.log('onBlur')
                  setIsAnswerFocused(false)
                }}
                placeholder="Digite sua resposta"
                onChange={onChange}
                value={answer}
              ></CustomTextareaAutosize>
              <Suggestion
                ref={suggestionRef}
                offsetHeight={suggestionOffsetHeight}
                isFocused={isAnswerFocused}
                onClick={() => {
                  console.log('onClick');
                  alert('cu')
                }}
              >
                {item.suggestion}
              </Suggestion>
              <SendButton>
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
