import { UsersDocument, Users } from "./schemas/users.schema.js";
import { CreateUserDto } from "./dto/create-user.dto.js";
import { UpdateUserDto } from "./dto/update-user.dto.js";
import { Injectable } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserService{
    constructor(
        @InjectModel(Users.name) private userModel: Model<UsersDocument>,
    ) {}

    async createUser(data: CreateUserDto): Promise<UsersDocument> {
        const user = new this.userModel(data);
        return user.save()
    }

    async findAll(): Promise<UsersDocument[]> {
        return this.userModel.find()
    }

    async findById(id: string): Promise<UsersDocument> {
        const user = await this.userModel.findById(id)
        if (!user){
            throw new Error('Usuário não encontrado')
        }
        return user;
    }

    async updateUser(id: string, data: UpdateUserDto): Promise<UsersDocument>{
        const user = await this.userModel.findByIdAndUpdate(id, data, { new:true });
        if (!user){
            throw new Error("Usuário não encontrado");
        }
        return user;
    } 

    async deleteUser(id: string): Promise<void>{
        const user = await this.userModel.findByIdAndDelete(id)
        if (!user){
            throw new Error("Usuário não encontrado");
        }
    }
}

