import { Request, response, Response } from "express";
import ListTeacherService from "../services/ListTeacherService";
import CreateTeacherService from "../services/CreateTeacherService";
import UpdateTeacherService from "../services/UpdateTeacherService";
import DeleteTeacherService from "../services/DeleteTeacherService";
import ShowTeacherService from "../services/ShowTeacherService";

export default class TeacherController{
  constructor(){}

  public async index(request: Request, response: Response): Promise<Response>{
    const listTeachers = new ListTeacherService();
    const teacher = await listTeachers.execute();
    return response.json(teacher);
  }

  public async show(request: Request, response: Response): Promise<Response>{
    const { id } = request.params;
    const showTeacher= new ShowTeacherService();
    const teacher = await showTeacher.execute({ id });
    return response.json(teacher);
  }

  public async create(request: Request, response: Response): Promise<Response>{
    const {name, email} = request.body;
    const createTeacher = new CreateTeacherService();
    const teacher = await createTeacher.execute({name, email});
    return response.json(teacher);
  }

  public async update(request: Request, response: Response): Promise<Response>{
    const {name, email} = request.body;
    const { id } = request.params;
    const updateTeacher = new UpdateTeacherService();
    const teacher = await updateTeacher.execute({id, name, email});
    return response.json(teacher);
  }

  public async delete(request: Request, response: Response): Promise<Response>{
    const { id } = request.params
    const deleteTeacher = new DeleteTeacherService();
    await deleteTeacher.execute({id});
    return response.json([]);
  }

}
