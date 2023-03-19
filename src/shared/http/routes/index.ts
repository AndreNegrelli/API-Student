import usersRouter from "@modules/users/routes/user.routes";
import studentRouter from "@modules/student/routes/student.routes";
import { Router } from "express";
import sessionsRouter from "@modules/users/routes/session.routes";
import passwordRouter from "@modules/users/routes/password.routes";
import profileRouter from "@modules/users/routes/profile.routes";
import teacherRouter from "@modules/teacher/routes/teacher.routes";
import classroomRouter from "@modules/classroom/routes/classrooms.routes";

const routes = Router()

routes.use('/users', usersRouter)
routes.use('/students', studentRouter)
routes.use('/password', passwordRouter)
routes.use('/profile', profileRouter)
routes.use('/teachers', teacherRouter)
routes.use('/classrooms', classroomRouter)


export default routes;