import AppError from "@shared/http/errors/AppError";
import { getCustomRepository } from "typeorm";
import Classroom from "../typeorm/entities/Classroom";
import ClassroomRepositoty from "../typeorm/repositories/ClassroomRepository";

interface IRequest{
    id: string;
    name: string;
    number_of_students: number;
    teacher_id: string;
}

export default class UpdateClassroomService{

    public async execute({id, name, number_of_students, teacher_id} : IRequest) :
     Promise<Classroom>{
        const classroomRepository = 
        getCustomRepository(ClassroomRepositoty);

        const classroom = await classroomRepository.findOne(id);
        if(!classroom){
            throw new AppError('Classroom not found.');
        }

        classroom.name = name;
        classroom.number_of_students = number_of_students;
        classroom.teacher_id = teacher_id;

        await classroomRepository.save(classroom);

        return classroom;
    }

}