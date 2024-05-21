import { Brand } from 'src/warehouse/brands/entities/brand.entity';
import { Category } from 'src/warehouse/categories/entities/category.entity';
import { PrimaryGeneratedColumn, Column, Entity, OneToOne, JoinColumn, ManyToOne } from 'typeorm'

@Entity({ name: 'products' })
export class Product {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column('varchar', { length: 100 })
    name: string;

    @Column('int')
    customer_id: number;

    
    @Column('decimal', { precision: 10, scale: 2,nullable: false })
    unit_price: number;

    @Column('smallint')
    unit_stock: number;

    @Column('text')
    description: string;

    @Column('varchar', {nullable: true, length: 150 })
    image: string;
    
    @OneToOne(()=>Category)
    @JoinColumn({name: 'category_id'})
    category: Category;

    @OneToOne(()=> Brand)
    @JoinColumn({name: 'brand_id'})
    brand: Brand

}
