import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import ClassroomController from "../controllers/ClassroomController";

const classroomRouter = Router();
const classroomController = new ClassroomController();

classroomRouter.get('/:id', celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()}
}), classroomController.show);

classroomRouter.post('/', celebrate({
    [Segments.BODY] : {
        teacher_id: Joi.required(),
        student_id: Joi.required(),
        name: Joi.string().required(),
        number_of_students: Joi.number().required(),
    }
}), classroomController.create);

export default classroomRouter;