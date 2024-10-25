import { ICommand } from '@nestjs/cqrs';
import { DeletePriceDto } from '../../dtos/delete-price.dto';

export class DeletePriceCommand implements ICommand {
    constructor(public readonly deletePriceDto: DeletePriceDto) {}
}
