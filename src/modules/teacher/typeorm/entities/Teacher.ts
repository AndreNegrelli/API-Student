import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('teachers')
export default class Teacher{
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column()
  name: string
  @Column()
  email: string
  @CreateDateColumn()
  created_at: Date
  @UpdateDateColumn()
  updated_at: Date
}
