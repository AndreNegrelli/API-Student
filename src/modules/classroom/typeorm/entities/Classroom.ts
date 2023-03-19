import Student from "@modules/student/typeorm/entities/Student";
import Teacher from "@modules/teacher/typeorm/entities/Teacher"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"

@Entity('classrooms')
export default class Classroom{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @ManyToOne(()=> Teacher)
    @JoinColumn({name: 'teacher_id'})
    teacher: Teacher;
    @OneToMany(()=> Student, students_classroom => students_classroom.classroom, {cascade:true})
    students_classroom: Student;
    @Column('varchar')
    name: string
    @Column('integer')
    number_of_students: number
    @CreateDateColumn()
    created_at: Date
    @CreateDateColumn()
    updated_at: Date
}