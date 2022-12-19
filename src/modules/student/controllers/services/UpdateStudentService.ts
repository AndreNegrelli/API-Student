import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Student from "../../typeorm/entities/Student";
import StudentRepository from "../../typeorm/repositories/StudentRepository";

interface IRequest{
    id: string;
    name: string;
    adress: string;
    birthdate: number;
}

export default class UpdateStudentService{

    public async execute({id, name, adress, birthdate} : IRequest) :
     Promise<Student>{
        const studentRepository = 
        getCustomRepository(StudentRepository);

        const student = await studentRepository.findOne(id);
        if(!student){
            throw new AppError('Student not found.');
        }

        student.name = name;
        student.adress = adress;
        student.birthdate = birthdate;

        await studentRepository.save(student);

        return student;
    }

}