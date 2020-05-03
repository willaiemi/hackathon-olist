import { Router } from 'express';

import questionsRouter from './questions.routes';
import answersRouter from './answers.routes';

const routes = Router();

routes.use('/stovepipe/v1/questions', questionsRouter);
routes.use('/stovepipe/v1/answers', answersRouter);

export default routes;
