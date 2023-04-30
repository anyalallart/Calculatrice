import { Controller, Get } from '@nestjs/common';
import { ErreurService } from './erreur.service';
import { Erreur } from './erreur.entity';

@Controller('erreur')
export class ErreurController {
    constructor(private erreurService:ErreurService) {}
    
    @Get()
    getErreur(){
        console.log('get erreur, nombre, dernière date');
        this.erreurService.createErreur();   
        let obj = [this.erreurService.getErreur(), this.erreurService.dateErreur(), this.erreurService.getNumber()];
        return obj;
    }
}