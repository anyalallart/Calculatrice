import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Annonce } from '../annonces/annonces.entity';

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'BH33e2va',
    database: 'calculatrice',
    entities: [Annonce],
};