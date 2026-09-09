import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { HydratedDocument } from 'mongoose'

export type UsersDocument = HydratedDocument<Users>;

@Schema()
export class Users{
    @Prop()
    name:string;

    @Prop()
    idade: number;

    @Prop()
    turmas: string;

    @Prop()
    semestre: string;
}


export const UsersDocument = SchemaFactory.createForClass(Users);