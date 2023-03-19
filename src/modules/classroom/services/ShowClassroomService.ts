import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Classroom from "../typeorm/entities/Classroom";
import ClassroomRepositoty from "../typeorm/repositories/ClassroomRepository";



interface IRequest{
    id: string;
}

export default class ShowClassroomService{
    public async execute({id}: IRequest): Promise<Classroom>{
        const classroomRepository = getCustomRepository(ClassroomRepositoty);
        const classroom = await classroomRepository.findById(id);
        if(!classroom){
         throw new AppError('Classroom not found.');
        } 
        return classroom;
     }
}