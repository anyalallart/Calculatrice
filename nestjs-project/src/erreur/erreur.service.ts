import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Erreur } from './erreur.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ErreurService {
    constructor(
        @InjectRepository(Erreur)
        private erreurRepository : Repository<Erreur>,
    ){}

    async createErreur(id : string, created : Date){
        const erreur = new Erreur();
        erreur.id = id;
        erreur.created = created;
        await erreur.save();
        return erreur;
    }

    async getErreur(){
        const res = await this.erreurRepository.find();
        console.log('erreur est :', res);
        return res;
    }
}