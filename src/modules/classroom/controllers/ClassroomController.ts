import { Request, Response } from "express";
import CreateClassroomService from "../services/CreateClassroomService";
import ShowClassroomService from "../services/ShowClassroomService";


export default class ClassroomController {
    public async show(request: Request, response: Response):
        Promise<Response> {
        console.log("caiu aqui");
        const { id } = request.params;
        console.log(id);
        const showClassroom = new ShowClassroomService();
        const classroom = await showClassroom.execute({ id });
        return response.json(classroom);
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { teacher_id, student_id, name, number_of_students } = request.body;
        const createclassroom = new CreateClassroomService();
        const classroom = await createclassroom.execute({ teacher_id, student_id, name, number_of_students });
        return response.json(classroom);
    }
}