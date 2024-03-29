import { Request, Response } from "express";
import CreateStudentService from "../services/CreateStudentService";
import DeleteStudentService from "../services/DeleteStudentService";
import ListStudentService from "../services/ListStudentService";
import ShowStudentService from "../services/ShowStudentService";
import UpdateStudentService from "../services/UpdateStudentService";

export default class StudentController{
    public async index(request: Request, response: Response) :
    Promise<Response>{
        const listStudents = new ListStudentService();
        const students = await listStudents.execute();
        return response.json(students);
    }
    public async show(request: Request, response: Response) :
    Promise<Response>{
        const { id } = request.params;
        const showStudent = new ShowStudentService();
        const student = await showStudent.execute({ id });
        return response.json(student);
    }
    public async create(request: Request, response: Response) :
    Promise<Response>{
        console.log("caiu aqui");
        const { name, adress, birthdate } = request.body;
        const createStudent = new CreateStudentService();
        const student = await createStudent.execute({ name, adress, birthdate });
        console.log(student);
        return response.json(student);
    }
    public async update(request: Request, response: Response) :
    Promise<Response>{
        const { id } = request.params;
        const { name, adress, birthdate } = request.body;
        const updateProduct = new UpdateStudentService();
        const product = await updateProduct.execute({ id, name, adress, birthdate });
        return response.json(product);
    }
    public async delete(request: Request, response: Response) :
    Promise<Response>{
        const { id } = request.params;
        const deleteStudent = new DeleteStudentService();
        await deleteStudent.execute({ id });
        return response.json([]);
    }
}