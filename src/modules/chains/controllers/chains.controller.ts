import { Body, Controller, Delete, Get, HttpStatus, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { PriceService } from '../services/price.service';
import { CreatePriceDto } from '../dtos/create-price.dto';
import { GetPriceDto } from '../dtos/get-price.dto';
import { ApiBody, ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';
import { JoiPipe } from 'nestjs-joi';
import { DeletePriceDto } from '../dtos/delete-price.dto';
import { UpdatePriceDto } from '../dtos/update-price.dto';
import { IdRequestParamsDto } from '../dtos/id-prams.dto';
import { TokenPriceDto } from '../dtos/token-price.dto';

@Controller('/chains')
@ApiTags('chains')
export class ChainsController {
    constructor(private readonly _priceService: PriceService) {}

    @Get('/price')
    @ApiQuery({ type: GetPriceDto })
    @ApiResponse({ status: 200, description: 'Get price' })
    @ApiOperation({ summary: 'Get a price' })
    getPrice(@Query() getPriceDto: GetPriceDto) {
        return this._priceService.getPrice(getPriceDto);
    }

    @Post('/price')
    @ApiBody({ type: CreatePriceDto })
    @ApiResponse({ status: HttpStatus.CREATED, description: 'Price created' })
    @ApiOperation({ summary: 'Create a price' })
    createPrice(@Body() createPriceDto: CreatePriceDto) {
        console.log('createPriceDto ->', createPriceDto);
        return this._priceService.createPrice(createPriceDto);
    }

    @Patch('/price/:id')
    @ApiBody({ type: UpdatePriceDto })
    @ApiResponse({ status: HttpStatus.OK, description: 'Price updated' })
    @ApiOperation({ summary: 'Update a price' })
    updatePrice(@Param() id: IdRequestParamsDto, @Body() dto: UpdatePriceDto) {
        console.log('updatePriceDto ->', id);
        return this._priceService.updatePrice({
            ...dto,
            id: id.id,
        });
    }

    @Delete('/price/:id')
    @ApiBody({ type: DeletePriceDto })
    @ApiResponse({ status: HttpStatus.OK, description: 'Price deleted' })
    @ApiOperation({ summary: 'Delete a price' })
    deletePrice(@Param() id: IdRequestParamsDto) {
        console.log('deletePriceDto ->', id);
        return this._priceService.deletePrice(id);
    }
}
