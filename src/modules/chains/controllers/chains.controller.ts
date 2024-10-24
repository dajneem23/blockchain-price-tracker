import { Body, Controller, Get, HttpStatus, Post, Query } from '@nestjs/common';
import { PriceService } from '../services/price.service';
import { CreatePriceDto } from '../dtos/create-price.dto';
import { GetPriceDto } from '../dtos/get-price.dto';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JoiPipe } from 'nestjs-joi';

@Controller('/chains')
@ApiTags('chains')
export class ChainsController {
    constructor(private readonly _priceService: PriceService) {}

    @Get('/price')
    @ApiQuery({ type: GetPriceDto })
    @ApiResponse({ status: 200, description: 'Get price' })
    @ApiOperation({ summary: 'Get a price' })
    async getPrice(@Query() getPriceDto: GetPriceDto) {
        return await this._priceService.getPrice(getPriceDto);
    }

    @Post('/price')
    @ApiBody({ type: CreatePriceDto })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Price created' })
    @ApiOperation({ summary: 'Create a price' })
    async createPrice(@Body() createPriceDto: CreatePriceDto) {
        console.log('createPriceDto ->', createPriceDto);
        return await this._priceService.createPrice(createPriceDto);
    }
}
