import { Controller, Get, Param } from '@nestjs/common';
import { EthereumService } from '../services/eth.service';
import { ApiOperation } from '@nestjs/swagger';
import { GetPriceRequestParamsDto } from '../dtos/get-price.dto';

@Controller('/chains/eth')
export class EthereumController {
    constructor(private readonly ethService: EthereumService) {}

    @ApiOperation({ summary: 'Get the current price of Ethereum' })
    @Get('/price')
    async getPrice(@Param() tokenId: GetPriceRequestParamsDto) {
        return this.ethService.getPrice(tokenId);
    }
}
