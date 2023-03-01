import { getCustomRepository } from "typeorm";
import Student from "../typeorm/entities/Student";
import StudentRepository from "../typeorm/repositories/StudentRepository";



export default class ListStudentService{

    public async execute() : Promise<Student[]>{
        const productRepository = 
        getCustomRepository(StudentRepository);

        const products = await productRepository.find();
        return products;
    }

}