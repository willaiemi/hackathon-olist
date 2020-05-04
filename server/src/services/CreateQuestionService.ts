import { getRepository, getCustomRepository } from 'typeorm';
import { RuntimeIntent, RuntimeEntity } from 'ibm-watson/assistant/v2';

import Question from '../models/Question';

import CategoryRepository from '../repositories/CategoriesRepository';

interface RequestDTO {
  question: string;
  intent: RuntimeIntent | undefined;
  entity: RuntimeEntity | undefined;
}

class CreateAnswerService {
  public async execute({ question, intent, entity }: RequestDTO): Promise<Question> {
    const answerRepository = getRepository(Question);
    const categoryRepository = getCustomRepository(CategoryRepository);

    const category = await categoryRepository.findOneOrCreate({
      title: entity?.entity,
      type: 'Question',
    });

    const newQuestion = answerRepository.create({
      category,
      intent_type: intent?.intent || 'Generic Question Intent',
      text: question,
    });

    await answerRepository.save(newQuestion);

    return newQuestion;
  }
}

export default CreateAnswerService;
