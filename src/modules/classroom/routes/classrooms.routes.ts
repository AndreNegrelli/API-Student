import isAuthenticated from "@shared/http/middlewares/isAuthenticated";
import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import ClassroomController from "../controllers/ClassroomController";

const classroomRouter = Router();
const classroomController = new ClassroomController();

classroomRouter.use(isAuthenticated);

classroomRouter.get('/:id', celebrate({
    [Segments.PARAMS] : {id: Joi.string().uuid().required()}
}), classroomController.show);

classroomRouter.post('/', celebrate({
    [Segments.BODY] : {
        customer_id: Joi.string().required(),
        products: Joi.required(),
        name: Joi.string().required(),
        number_of_students: Joi.number().required(),
    }
}), classroomController.create);

export default classroomRouter;