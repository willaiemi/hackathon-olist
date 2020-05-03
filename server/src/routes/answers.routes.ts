import { Router } from 'express';
import { getRepository } from 'typeorm';

import Answer from '../models/Answer';
import CreateAnswerService from '../services/CreateAnswerService';
import WatsonAssistantService from '../services/WatsonAssistantService';

const answersRoute = Router();

answersRoute.get('/', async (req, res) => {
  const answerRepository = getRepository(Answer);

  const answers = answerRepository.find();

  return res.json({
    answers
  });
});

answersRoute.post('/', async (req, res) => {
  const { text } = req.body;

  const watsonAssistant = new WatsonAssistantService();

  const message = await watsonAssistant.execute({ answer: text });

  const intent = message.output.intents && message.output.intents[0];
  const entity = message.output.entities && message.output.entities[0];

  const createAnswer = new CreateAnswerService();

  const answer = await createAnswer.execute({
    intent,
    entity,
    answer: text,
  });

  return res.json(answer);
});

export default answersRoute;
