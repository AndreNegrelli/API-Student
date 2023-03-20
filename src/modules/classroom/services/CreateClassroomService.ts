import StudentRepository from "@modules/student/typeorm/repositories/StudentRepository";
import TeachersRepository from "@modules/teacher/typeorm/repositories/TeacherRepositoy";
import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Classroom from "../typeorm/entities/Classroom";
import ClassroomRepositoty from "../typeorm/repositories/ClassroomRepository";



interface IStudent{
    id: string,
    name: string;
}

interface IRequest{
    teacher_id: string;
    student_id: IStudent[];
    name: string;
    number_of_students: number;
}

export default class CreateClassroomService{

    public async execute({teacher_id, student_id, name, number_of_students}: IRequest): Promise<Classroom>{
        const studentsRepository = getCustomRepository(StudentRepository);
        const teacherRepository = getCustomRepository(TeachersRepository);
        const classroomRepository = getCustomRepository(ClassroomRepositoty);
        
        const teacherExists = await teacherRepository.findById(teacher_id);
        if(!teacherExists){
            throw new AppError('Could not find any teacher with the given id.');
        }
        const existsStudents = await studentsRepository.findAllByIds(student_id);
        if(!existsStudents){
            throw new AppError('Could not find any students with the given ids.');
        }

        const classroom = await classroomRepository.createClassroom({
            teacher: teacherExists,
            students: existsStudents,
            name: name,
            number_of_students: number_of_students
        });
        
        await classroomRepository.save(classroom);
        return classroom;
    }
}