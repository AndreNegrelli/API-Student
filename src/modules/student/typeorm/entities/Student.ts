import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity('students')
export default class Student{
    @PrimaryGeneratedColumn('uuid')
    id: string
    @Column('varchar')
    name: string
    @Column('varchar')
    adress: string
    @Column('date')
    birthdate: number
    @CreateDateColumn()
    created_at: Date
    @CreateDateColumn()
    updated_at: Date
}