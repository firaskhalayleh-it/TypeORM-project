import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm"
import { Length } from "class-validator";

@Entity()
export class User extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:false,  length:50, unique:true})
    username: string

    @Column()
    @Length(8,50) // min length = 8 and max length is = 50 of password
    password: string
    firstName: string;
    lastName: string;
    age: number;
    static username: any;

    

}


