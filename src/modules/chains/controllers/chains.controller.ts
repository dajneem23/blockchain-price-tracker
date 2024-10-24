import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { PriceService } from '../services/price.service';
import { CreatePriceDto } from '../dtos/create-price.dto';
import { GetPriceDto } from '../dtos/get-price.dto';

@Controller('/chains')
export class ChainsController {
    constructor(private readonly priceService: PriceService) {}

    @Get('/price')
    async getPrice(@Query() getPriceDto: GetPriceDto) {
        return await this.priceService.getPrice(getPriceDto);
    }

    @Post('/price')
    async createPrice(@Body() createPriceDto: CreatePriceDto) {
        return await this.priceService.createPrice(createPriceDto);
    }
}
