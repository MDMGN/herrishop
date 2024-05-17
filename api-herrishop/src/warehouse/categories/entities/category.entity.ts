import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'categories' })
export class Category{
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100 , unique: true} )
    name:string;
}