import { EntityRepository, Repository } from "typeorm";
import Teacher from "../entities/Teacher";

@EntityRepository(Teacher)
export default class TeachersRepository extends Repository<Teacher>{

  public async findByName(name: string): Promise<Teacher | undefined>{
    const teacher = await this.findOne({
      where: {
        name,
      },
    });
    return teacher;
  }

  public async findById(id: string): Promise<Teacher | undefined>{
    const teacher = await this.findOne({
      where: {
        id,
      },
    });
    return teacher;
  }

  public async findByEmail(email: string): Promise<Teacher | undefined>{
    const teacher = await this.findOne({
      where: {
        email,
      },
    });
    return teacher;
  }

}
