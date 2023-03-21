import { getCustomRepository } from "typeorm";
import Classroom from "../typeorm/entities/Classroom";
import ClassroomRepositoty from "../typeorm/repositories/ClassroomRepository";

export default class ListClassroomService{

    public async execute() : Promise<Classroom[]>{
        const classroomRepository = getCustomRepository(ClassroomRepositoty);
        const classrooms = await classroomRepository.find();
        return classrooms;
    }
}