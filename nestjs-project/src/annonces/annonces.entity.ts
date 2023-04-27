import { BaseEntity, Column, Entity, PrimaryColumn} from 'typeorm';

@Entity('annonce')
export class Annonce extends BaseEntity {
    @PrimaryColumn()
    id: string;
    @Column()
    temps: number;
}