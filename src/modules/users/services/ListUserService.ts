import AppError from "@shared/http/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRespository from "../typeorm/repositories/UsersRepository";

export default class ListUserService{

    public async execute() : Promise<User[]>{
        const usersRespository = getCustomRepository(UsersRespository);
        const users = await usersRespository.find();
        return users;
    }

}