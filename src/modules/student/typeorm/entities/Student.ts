import Classrooms from "@modules/classroom/typeorm/entities/Classroom"
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity('students')
export default class Student{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @ManyToOne(()=> Classrooms, classroom => classroom.students_classroom)
    @JoinColumn({name: 'classroom_id'})
    classroom: Classrooms;
    @Column('varchar')
    name: string
    @Column('varchar')
    adress: string
    @Column('varchar')
    birthdate: string
    @CreateDateColumn()
    created_at: Date
    @CreateDateColumn()
    updated_at: Date
}