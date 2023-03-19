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
    students: IStudent[];
    name: string;
    number_of_students: number;
}

export default class CreateClassroomService{

    public async execute({teacher_id, students, name, number_of_students}: IRequest): Promise<Classroom>{
        const studentsRepository = getCustomRepository(StudentRepository);
        const teacherRepository = getCustomRepository(TeachersRepository);
        const classroomRepository = getCustomRepository(ClassroomRepositoty);

        const teacherExists = await teacherRepository.findById(teacher_id);
        if(!teacherExists){
            throw new AppError('Could not find any teacher with the given id.');
        }

        const existsStudents = await studentsRepository.findAllByIds(students);
        if(!existsStudents.length){
            throw new AppError('Could not find any students with the given ids.');
        }

        const existsStudentsIds = existsStudents.map((student) =>student.id);
        const checkInexistentStudents = students.filter(
            student => !existsStudentsIds.includes(student.id)
        )
        if(!existsStudentsIds.length){
            throw new AppError(`Could not 
            find product ${checkInexistentStudents[0].id}`);
        }

        const serializerStudents = students.map(student => ({
            student_id : student.id,
            name: student.name
        }))

        const classroom = await classroomRepository.createClassroom({
            teacher: teacherExists,
            students: serializerStudents,
            name: name,
            number_of_students: number_of_students
        });

        await classroomRepository.save(classroom);
        return classroom;
    }
}