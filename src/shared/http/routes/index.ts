import usersRouter from "@modules/users/routes/user.routes";
import studentRouter from "@modules/student/routes/student.routes";
import { Router } from "express";

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/students', studentRouter);

export default routes;