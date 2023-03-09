import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import TeachersRepository from "../typeorm/repositories/TeacherRepositoy";

interface IRequest{
  id: string;
}
export default class DeleteTeacherService{

  public async execute({id}: IRequest) : Promise<void>{
    const teacherRepository = getCustomRepository(TeachersRepository);

    const teacher = await teacherRepository.findById(id);
    if(!teacher){
      throw new AppError('Teacher not found.');
    }

   await teacherRepository.remove(teacher);
  }
}

