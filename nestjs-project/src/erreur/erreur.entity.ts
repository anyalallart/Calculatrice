import {BaseEntity, Entity, PrimaryGeneratedColumn, CreateDateColumn} from 'typeorm';

@Entity('erreur')
export class Erreur extends BaseEntity{
    @PrimaryGeneratedColumn()
    id : string;
    @CreateDateColumn()
    created: Date;
}