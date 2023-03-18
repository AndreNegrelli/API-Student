import AppError from "@shared/http/errors/AppError";
import { getCustomRepository } from "typeorm";
import Student from "../typeorm/entities/Student";
import StudentRepository from "../typeorm/repositories/StudentRepository";

interface IRequest{
    name: string;
    adress: string;
    birthdate: number;
}

export default class CreateStudentService{

    public async execute({name, adress, birthdate} : IRequest) :
    Promise<Student>{
        const studentRepository = 
        getCustomRepository(StudentRepository);

        const studentNameExists = await
        studentRepository.findByName(name);

        const studentAdressExists = await
        studentRepository.findByAdress(adress);

        if(studentNameExists && studentAdressExists){
            throw new AppError('There is already one student ' + name +
            ' with this given information.');
        }

        const student = studentRepository.create({
            name, adress, birthdate
        });
        
        await studentRepository.save(student);
        return student;
    }

}