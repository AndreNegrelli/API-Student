import { EntityRepository, Repository } from "typeorm"
import Student from "../entities/Student"

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
}