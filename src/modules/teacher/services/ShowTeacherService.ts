import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Teacher from "../typeorm/entities/Teacher";
import TeachersRepository from "../typeorm/repositories/TeacherRepositoy";


interface IRequest{
  id: string;
}
export default class ShowTeacherService{

  public async execute({id}: IRequest) : Promise<Teacher>{
    const teacherRepository = getCustomRepository(TeachersRepository);

    const teacher = await teacherRepository.findById(id);
    if(!teacher){
      throw new AppError('Teacher not found.')
    }
    return teacher;
  }
}

