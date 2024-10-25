import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { GetPriceDto } from '../dtos/get-price.dto';
import { GetPriceQuery } from '../queries/impl/get-price.query';
import { CreatePriceCommand } from '../commands/impl/create-price-command';
import { CreatePriceDto } from '../dtos/create-price.dto';
import { UpdatePriceDto } from '../dtos/update-price.dto';
import { UpdatePriceCommand } from '../commands/impl/update-price-command';
import { DeletePriceDto } from '../dtos/delete-price.dto';
import { DeletePriceCommand } from '../commands/impl/delete-price-command';

@Injectable()
export class PriceService {
    constructor(
        private readonly _commandBus: CommandBus,
        private readonly _queryBus: QueryBus,
    ) {}

    async getPrice(price: GetPriceDto) {
        return this._queryBus.execute(new GetPriceQuery(price));
    }

    async createPrice(price: CreatePriceDto) {
        return this._commandBus.execute(new CreatePriceCommand(price));
    }

    async updatePrice(price: UpdatePriceDto) {
        return this._commandBus.execute(new UpdatePriceCommand(price));
    }

    async deletePrice(price: DeletePriceDto) {
        return this._commandBus.execute(new DeletePriceCommand(price));
    }
}
