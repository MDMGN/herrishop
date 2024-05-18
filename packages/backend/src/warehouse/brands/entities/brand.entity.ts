import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'brands' })
export class Brand {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column('varchar',{ length: 100 })
    name: string;
}