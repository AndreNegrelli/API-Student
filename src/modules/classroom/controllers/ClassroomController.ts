import { Request, Response } from "express";
import CreateClassroomService from "../services/CreateClassroomService";
import ShowClassroomService from "../services/ShowClassroomService";


export default class ClassroomController {
    public async show(request: Request, response: Response):
        Promise<Response> {
        const { id } = request.params;
        const showClassroom = new ShowClassroomService();
        const classroom = await showClassroom.execute({ id });
        return response.json(classroom);
    }

    public async create(request: Request, response: Response):
        Promise<Response> {
        const { teacher_id, students, name, number_of_students } = request.body;
        const createclassroom = new CreateClassroomService();
        const classroom = await createclassroom.execute({ teacher_id, students, name, number_of_students });
        return response.json(classroom);
    }
}