import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('students')
export default class Student{
    @PrimaryGeneratedColumn('uuid')
    id: string
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