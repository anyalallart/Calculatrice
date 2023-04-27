import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Annonce } from './annonces.entity';

@Injectable()
export class AnnoncesService {
    constructor(
        @InjectRepository(Annonce)
        private annoncesRepository: Repository<Annonce>,
        ) {}

    async createAnnonces(id : string, temps : number){
        const annonce = new Annonce();
        annonce.id = id;
        annonce.temps = temps;
        await annonce.save();
        return annonce;
    }

    async getAnnonces() {
        const res = await this.annoncesRepository.find();
        console.log('Calcul est :', res);
        return res;
    }
};
