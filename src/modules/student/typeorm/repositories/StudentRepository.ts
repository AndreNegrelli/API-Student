import { EntityRepository, In, Repository } from "typeorm"
import Student from "../entities/Student"

interface IFindStudents {
    id: string;
}

@EntityRepository(Student)
export default class StudentRepository extends Repository<Student>{
    public async findByName(name: string): Promise<Student | undefined> {
        const student = await this.findOne({
            where: { name }
        })
        return student
    }

    public async findByAdress(adress: string)
        : Promise<Student | undefined> {
        const student = await this.findOne({
            where: { adress }
        })
        return student;
    }

    public async findByBirthdate(birthdate: string)
        : Promise<Student | undefined> {
        const student = await this.findOne({
            where: { birthdate }
        })
        return student;
    }

    public async findById(id: string)
        : Promise<Student | undefined> {
        const student = await this.findOne({
            where: { id }
        })
        return student;
    }

    public async findAllByIds(students: IFindStudents[]):
        Promise<Student> {
        if (Array.isArray(students)) {
            const existsStudents = await this.find({
                where: { id: In(students) }
            })
            return existsStudents;
        }
        return this.findById(students);
    }
}