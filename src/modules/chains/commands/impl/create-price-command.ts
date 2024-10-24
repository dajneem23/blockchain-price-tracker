import { ICommand } from '@nestjs/cqrs';
import { CreatePriceDto } from '../../dtos/create-price.dto';

export class CreatePriceCommand implements ICommand {
    constructor(public readonly createPriceDto: CreatePriceDto) {}
}
