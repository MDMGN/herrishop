import { PrimaryGeneratedColumn, Column, Entity } from 'typeorm'

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100 })
    name: string;

    @Column('int')
    customer_id: number;

    @Column('int')
    category_id: number;

    @Column('decimal')
    unit_price: number;

    @Column('smallint')
    unit_stock: number;

    @Column('int')
    brand_id: number;

    @Column('text')
    description: string;

    @Column('varchar', {nullable: true, length: 150 })
    image: string;
}
