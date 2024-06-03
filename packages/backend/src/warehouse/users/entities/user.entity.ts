import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from "typeorm";

// Definición de la entidad usuarios
@Entity({ name: 'users' }) // Define una entidad llamada 'users' en la base de datos
export class User {
    @PrimaryGeneratedColumn('uuid') // Define una columna de clave primaria generada automáticamente como UUID
    id: string;

    @Column("varchar", { name: 'name', length: 20, nullable: false }) // Define una columna para el nombre con longitud máxima de 20 caracteres, no nula
    name: string;

    @Column("varchar", { name: 'surname', length: 20, nullable: false }) // Define una columna para el apellido con longitud máxima de 20 caracteres, no nula
    surname: string;
    
    @Column("varchar", { length: 50, unique: true, nullable: false }) // Define una columna para el correo electrónico con longitud máxima de 50 caracteres, único y no nulo
    email: string;

    @Column("varchar", { name: 'password', length: 60, nullable: false }) // Define una columna para la contraseña con longitud máxima de 60 caracteres, no nula
    password: string;

    @Column("varchar", { name: 'address', length: 50, nullable: false }) // Define una columna para la dirección con longitud máxima de 50 caracteres, no nula
    address: string;

    @Column("char", { name: 'zip_code', length: 5, nullable: false }) // Define una columna para el código postal con longitud de 5 caracteres, no nula
    zip_code: string;

    @Column("date", { name: 'birthdate', nullable: false }) // Define una columna para la fecha de nacimiento, no nula
    birthdate: string;

    @Column("tinyint", { name: 'status', nullable: false, default: () => 0 }) // Define una columna para el estado con tipo tinyint, no nula, con valor predeterminado 0
    status: number;

    @Column("varchar", { name: 'role', length: 20, nullable: false, default: ()=> 'USER' }) // Define una columna para el rol con longitud máxima de 20 caracteres, no nula, con valor predeterminado 'USER'
    role: string;

    @Column("timestamp", { default: ()=> 'CURRENT_TIMESTAMP'}) // Define una columna para la fecha de creación con valor predeterminado la fecha y hora actual
    created_at: string;
    
    @Column("timestamp", { default: () => 'CURRENT_TIMESTAMP', onUpdate: 'CURRENT_TIMESTAMP' }) // Define una columna para la fecha de actualización con valor predeterminado la fecha y hora actual, actualizada automáticamente al actualizar la fila
    updated_at: string;
}
