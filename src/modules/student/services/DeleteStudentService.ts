import AppError from "@shared/http/errors/AppError";
import { getCustomRepository } from "typeorm";
import StudentRepository from "../typeorm/repositories/StudentRepository";

interface IRequest{
    id: string;
}

export default class DeleteStudentService{

    public async execute({id} : IRequest) : Promise<void>{
        const studentRepository = 
        getCustomRepository(StudentRepository);

        const student = await studentRepository.findOne(id);
        if(!student){
            throw new AppError('Student not found.');
        }

        await studentRepository.remove(student);

    }

}