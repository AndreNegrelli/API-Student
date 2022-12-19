import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Student from "../../typeorm/entities/Student";
import StudentRepository from "../../typeorm/repositories/StudentRepository";


interface IRequest{
    id: string;
}

export default class ShowStudentService{

    public async execute({id} : IRequest) : Promise<Student>{
        const productRepository = 
        getCustomRepository(StudentRepository);

        const product = await productRepository.findOne(id);
        if(!product){
            throw new AppError('Student not found.');
        }

        return product;
    }

}