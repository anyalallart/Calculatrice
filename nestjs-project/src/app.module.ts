import { Module } from '@nestjs/common';
//import { AppController } from './app.controler';
//import { AppService } from './app.service';
import { AnnoncesController } from './annonces/annonces.controller';
import { AnnoncesService } from './annonces/annonces.service';
import { AnnoncesModule } from './annonces/annonces.module';
import { ErreurController } from './erreur/erreur.controller';
import { ErreurModule } from './erreur/erreur.module';
import { ErreurService } from './erreur/erreur.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';


@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), AnnoncesModule, ErreurModule],
  controllers: [ AnnoncesController, ErreurController],
  providers: [ AnnoncesService, ErreurService],
})
export class AppModule {}
