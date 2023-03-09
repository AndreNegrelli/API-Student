import { Router } from 'express';
import {celebrate, Joi, Segments} from 'celebrate';
import TeacherController from '../controllers/TeacherController';
import isAuthenticadted from '@shared/http/middlewares/isAuthenticated';

const teacherRouter = Router();
const teacherController = new TeacherController();

teacherRouter.use(isAuthenticadted);//todas autenticadas

teacherRouter.get('/', teacherController.index);

teacherRouter.get(
  '/:id',
  celebrate({
    [Segments.PARAMS]: {id: Joi.string().uuid().required()}
  }),
  teacherController.show);

teacherRouter.post('/',
celebrate({
  [Segments.BODY] : { name: Joi.string().required(),
  email: Joi.string().required()}
})
,teacherController.create);

teacherRouter.put('/:id',
celebrate({
  [Segments.BODY] : { name: Joi.string().required(),
    email: Joi.string().required()},
  [Segments.PARAMS]: {id: Joi.string().uuid().required(),}
}),
teacherController.update);

teacherRouter.delete('/:id',
celebrate({
  [Segments.PARAMS]: {id: Joi.string().uuid().required()}
}),
teacherController.delete);

export default teacherRouter;