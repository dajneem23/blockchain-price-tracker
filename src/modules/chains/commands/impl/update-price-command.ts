import { ICommand } from '@nestjs/cqrs';
import { UpdatePriceDto } from '../../dtos/update-price.dto';

export class UpdatePriceCommand implements ICommand {
    constructor(public readonly getPriceDto: UpdatePriceDto) {}
}
