import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Teacher from "../typeorm/entities/Teacher";
import TeachersRepository from "../typeorm/repositories/TeacherRepositoy";

interface IRequest{
  id: string;
  name: string;
  email: string;

}

export default class UpdateTeacherService{

  public async execute({id, name, email}: IRequest) : Promise<Teacher>{
    const teacherRepository = getCustomRepository(TeachersRepository);

    const teacher = await teacherRepository.findById(id);
    if(!teacher){
      throw new AppError('Teacher not found.')
    }

    const teacherExists = await teacherRepository.findByEmail(email);
    if(teacherExists && email !== teacher.email){
      throw new AppError('There is already one user with this email');
    }

    teacher.name = name;
    teacher.email = email;

    await teacherRepository.save(teacher);

    return teacher;
  }
}

