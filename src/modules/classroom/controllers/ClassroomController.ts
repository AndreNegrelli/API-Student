import { Request, Response } from "express";
import CreateClassroomService from "../services/CreateClassroomService";
import DeleteClassroomService from "../services/DeleteClassroomService";
import ListClassroomService from "../services/ListClassroomService";
import ShowClassroomService from "../services/ShowClassroomService";
import UpdateClassroomService from "../services/UpdateClassroomService";


export default class ClassroomController {
    public async index(request: Request, response: Response) :
    Promise<Response>{
        const listClassrooms = new ListClassroomService();
        const classroom = await listClassrooms.execute();
        return response.json(classroom);
    }
    public async show(request: Request, response: Response):
        Promise<Response> {
        const { id } = request.params;
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
    public async update(request: Request, response: Response) :
    Promise<Response>{
        const { id } = request.params;
        const { name, number_of_students, teacher_id } = request.body;
        const updateClassroom = new UpdateClassroomService();
        const classroom = await updateClassroom.execute({ id, name, number_of_students, teacher_id });
        return response.json(classroom);
    }
    public async delete(request: Request, response: Response) :
    Promise<Response>{
        const { id } = request.params;
        const deleteClassroom = new DeleteClassroomService();
        await deleteClassroom.execute({ id });
        return response.json([]);
    }
}