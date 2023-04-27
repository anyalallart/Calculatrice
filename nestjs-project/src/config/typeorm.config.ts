import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Annonce } from '../annonces/annonces.entity';

export const typeOrmConfig : TypeOrmModuleOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'junia_user',
    password: 'junia_user',
    database: 'junia',
    entities: [Annonce],
};
