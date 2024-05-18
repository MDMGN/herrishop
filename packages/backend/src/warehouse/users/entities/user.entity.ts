import { Column, PrimaryGeneratedColumn } from "typeorm";

export class User {
    @PrimaryGeneratedColumn("increment")
    id:number;
    @Column("varchar", {length: 50})
    email:string;
    
}
