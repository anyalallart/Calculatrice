import { Controller, Get, Post, Delete } from '@nestjs/common';
import { AnnoncesService } from './annonces.service';

@Controller('annonces')
export class AnnoncesController {

    constructor(private annoncesService: AnnoncesService) {}

    @Get()
    getAllAnnonces() {
        console.log('get all');
        return this.annoncesService.getAnnonces();
    }
    @Post()
    createAnnonce() {
        console.log('create');
    }
    @Delete()
    deleteAnnonce() {
        console.log('delete');
    }
}
