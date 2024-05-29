import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column("varchar", { name: 'name', length: 20, nullable: false })
    name: string;

    @Column("varchar", { name: 'surname', length: 20, nullable: false })
    surname: string;
    
    @Column("varchar", { length: 50, unique: true, nullable: false })
    email: string;

    @Column("varchar", { name: 'password', length: 60, nullable: false })
    password: string;


    @Column("varchar", { name: 'address', length: 50, nullable: false })
    address: string;

    @Column("char", { name: 'zip_code', length: 5, nullable: false })
    zip_code: string;

    @Column("date", { name: 'birthdate', nullable: false })
    birthdate: string;

    @Column("tinyint", { name: 'status', nullable: false, default: () => 0 })
    status: number;

    @Column("varchar", { name: 'role', length: 20, nullable: false, default: ()=> 'USER' })
    role: string;

    @Column("timestamp", { default: ()=> 'CURRENT_TIMESTAMP'})
    created_at: string;
    
    @Column("timestamp", { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' })
    updated_at: string;
}
