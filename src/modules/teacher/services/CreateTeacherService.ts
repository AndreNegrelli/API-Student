import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Teacher from "../typeorm/entities/Teacher";
import TeachersRepository from "../typeorm/repositories/TeacherRepositoy";

interface IRequest{
  name: string;
  email: string;
}

export default class CreateTeacherService{

  public async execute({name, email}: IRequest) : Promise<Teacher>{
    const teachersRepository = getCustomRepository(TeachersRepository);
    const emailExists  = await teachersRepository.findByEmail(email);
    if(emailExists){
      throw new AppError('Email address already used');
    }
    const teacher = teachersRepository.create({
      name,
      email
    });
    console.log(teachersRepository.save(teacher));
    await teachersRepository.save(teacher);
    return teacher;
  }

}