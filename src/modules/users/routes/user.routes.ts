import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import UsersController from "../controllers/UsersController";
import isAuthenticated from "@shared/http/middlewares/isAuthenticated";
import uploadConfig from "@modules/config/upload";
import UserAvatarController from "../controllers/UserAvatarController";
import multer from "multer";


const userRouter = Router()
const usersController = new UsersController()
const usersAvatarController = new UserAvatarController()
const upload = multer(uploadConfig)

userRouter.get('/', isAuthenticated, usersController.index)
userRouter.post('/', celebrate({
    [Segments.BODY] : {
        name : Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required()
    }
}), usersController.create)
userRouter.patch('/avatar', isAuthenticated, upload.single('avatar'), usersAvatarController.update)
 export default userRouter