import Teacher from "@modules/teacher/typeorm/entities/Teacher";
import { EntityRepository, Repository } from "typeorm";
import Classroom from "../entities/Classroom";



interface IStudent {
    student_id: string;
    name: string;
}

interface IRequest {
    teacher: Teacher,
    students: IStudent[],
    name: string,
    number_of_students: number
}

@EntityRepository(Classroom)
export default class ClassroomRepositoty extends Repository<Classroom>{
    public async findById(id: string): Promise<Classroom | undefined> {
        const classroom = await this.createQueryBuilder('classroom')
        .leftJoinAndSelect('classroom.teacher', 'teacher')
        .where('teacher.id = classroom.teacher_id')
        .where('classroom.id = :id', { id })
        .getOne()
        
        return classroom;
    }

    public async findByName(name: string): Promise<Classroom | undefined> {
        const classroom = await this.createQueryBuilder('classroom')
        .leftJoinAndSelect('classroom.teacher', 'teacher')
        .where('teacher.id = classroom.teacher_id')
        .where('classroom.id = :id', { name })
        .getOne()
        
        return classroom;
    }

    public async createClassroom({ teacher, students, name, number_of_students }: IRequest):
        Promise<Classroom> {
        const classroom = this.create({ teacher, students_classroom: students, name, number_of_students });
        await this.save(classroom);
        return classroom;
    }
}