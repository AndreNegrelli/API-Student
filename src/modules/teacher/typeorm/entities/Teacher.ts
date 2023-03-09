import { Column, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"

@Entity('teachers')
export default class Teacher{
  @PrimaryGeneratedColumn('uuid')
  id: string
  @Column()
  name: string
  @Column()
  email: string
  @Column()
  created_at: Date
  @UpdateDateColumn()
  updated_at: Date
}
