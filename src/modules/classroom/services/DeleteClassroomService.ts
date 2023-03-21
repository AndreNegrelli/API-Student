import AppError from "@shared/http/errors/AppError";
import { getCustomRepository } from "typeorm";
import ClassroomRepositoty from "../typeorm/repositories/ClassroomRepository";

interface IRequest{
    id: string;
}

export default class DeleteClassroomService{

    public async execute({id} : IRequest) : Promise<void>{
        const classroomRepository = 
        getCustomRepository(ClassroomRepositoty);

        const classroom = await classroomRepository.findOne(id);
        if(!classroom){
            throw new AppError('classroom not found.');
        }
        
        await classroomRepository.remove(classroom);

    }

}