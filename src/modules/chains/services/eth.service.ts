import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPriceDto } from '../dtos/get-price.dto';
import { GetPriceQuery } from '../queries/impl/get-price.query';

//import { Cheerio,CheerioAPI } from 'cheerio';
@Injectable()
export class EthereumService {
    constructor(
        private readonly _commandBus: CommandBus,
        private readonly _queryBus: QueryBus,
    ) {}

    async getPrice(price: GetPriceDto) {
        return this._queryBus.execute(new GetPriceQuery(price));
    }

    @Cron(CronExpression.EVERY_5_MINUTES)
    async updatePrice() {
        console.log('Updating ETH price every hour');
    }
}
