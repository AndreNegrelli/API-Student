import { getCustomRepository } from "typeorm";
import Teacher from "../typeorm/entities/Teacher";
import TeachersRepository from "../typeorm/repositories/TeacherRepositoy";

export default class ListTeacherService{

  public async execute() : Promise<Teacher[]>{
    const teacherRepository = getCustomRepository(TeachersRepository);

    const customers = await teacherRepository.find();

    return customers;
  }
}