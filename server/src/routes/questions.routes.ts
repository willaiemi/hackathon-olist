import { Router } from 'express';
import { getRepository } from 'typeorm';

import Question from '../models/Question';
import CreateQuestionService from '../services/CreateQuestionService';
import WatsonAssistantService from '../services/WatsonAssistantService';

const questionsRoute = Router();

questionsRoute.get('/', async (req, res) => {
  const answerRepository = getRepository(Question);

  const questions = await answerRepository.find();

  return res.json({
    questions
  });
});

questionsRoute.post('/', async (req, res) => {
  const { text } = req.body;

  const watsonAssistant = new WatsonAssistantService();

  const message = await watsonAssistant.execute({ answer: text });

  const intent = message.output.intents && message.output.intents[0];
  const entity = message.output.entities && message.output.entities[0];

  const createQuestion = new CreateQuestionService();

  const question = await createQuestion.execute({
    intent,
    entity,
    question: text,
  });

  return res.json(question);
});

export default questionsRoute;
