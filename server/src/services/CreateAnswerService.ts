import { getRepository, getCustomRepository } from 'typeorm';
import { RuntimeIntent, RuntimeEntity } from 'ibm-watson/assistant/v2';

import Answer from '../models/Answer';

import CategoryRepository from '../repositories/CategoriesRepository';

interface RequestDTO {
  answer: string;
  intent: RuntimeIntent | undefined;
  entity: RuntimeEntity | undefined;
}

class CreateAnswerService {
  public async execute({ answer, intent, entity }: RequestDTO): Promise<Answer> {
    const answerRepository = getRepository(Answer);
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.findOneOrCreate({
      title: entity?.entity,
      type: 'Answer',
    });

    const newAnswer = answerRepository.create({
      category,
      intent_type: intent?.intent || 'Generic Answer Intent',
      text: answer,
    });

    await answerRepository.save(newAnswer);

    return newAnswer;
  }
}

export default CreateAnswerService;
