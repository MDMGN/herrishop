import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column("varchar", { length: 50, unique: true, nullable: false })
    email: string;

    @Column("varchar", { name: 'password', length: 60, nullable: false })
    password: string;

    @Column("varchar", { name: 'surname', length: 20, nullable: false })
    surname: string;

    @Column("varchar", { name: 'address', length: 50, nullable: false })
    address: string;

    @Column("char", { name: 'zip_code', length: 5, nullable: false })
    zipCode: string;

    @Column("date", { name: 'birthdate', nullable: false })
    birthdate: string;

    @Column("varchar", { name: 'token', nullable: true })
    token: string;

    @Column("tinyint", { name: 'status', nullable: false, default: () => 0 })
    status: number;

    @Column("varchar", { name: 'role', length: 20, nullable: false })
    role: string;
}
