import { Product } from "src/warehouse/products/entities/product.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'brands'})
export class Brand {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column('varchar',{length: 100, unique: true })
    name: string;
    @OneToMany(()=> Product, product=> product.brand)
    products:Product[]
}