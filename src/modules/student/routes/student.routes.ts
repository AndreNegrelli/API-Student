import { Router } from "express";
import StudentController from "../controllers/StudentController";
import { celebrate, Joi, Segments } from "celebrate";

const studentRouter = Router();
const studentController = new StudentController();


studentRouter.get('/', studentController.index);
studentRouter.get('/:id', celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()}
}), studentController.show);
studentRouter.post('/', celebrate({
    [Segments.BODY]: {
     name: Joi.string().required(),
     adress: Joi.number().precision(2).required(),
     birthdate: Joi.number().required()
    } 
 }), studentController.create);
 studentRouter.put('/:id', celebrate({
     [Segments.PARAMS] : {id: Joi.string().uuid().required()},
     [Segments.BODY]: {
         name: Joi.string().required(),
         adress: Joi.number().precision(2).required(),
         birthdate: Joi.number().required()
        } 
 }), studentController.update);
 studentRouter.delete('/:id', celebrate({
     [Segments.PARAMS] : {id: Joi.string().uuid().required()}
 }), studentController.delete);
 
 export default studentRouter;
