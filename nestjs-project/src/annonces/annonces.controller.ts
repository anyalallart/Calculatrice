import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { MessageDto } from './annonces.dto';

import { AnnoncesService } from './annonces.service';

@Controller('annonces')
export class AnnoncesController {
    constructor(private annoncesService: AnnoncesService) {}

    @Get()
    StartTimer() {
        console.log('First carac');
        this.annoncesService.timeStart();
        return {message: "start timer"}
    }

    @Post()
    createAnnonce(@Body() message: MessageDto){
        const t = this.annoncesService.timeEnd();
        this.annoncesService.createAnnonces(t, message.calcul);
        this.annoncesService.getMoy();
        console.log(message);
        return message;
    }
}