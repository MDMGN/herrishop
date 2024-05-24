import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'users'})
export class User {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column("varchar", {length: 50})
    email:string;
    
}
