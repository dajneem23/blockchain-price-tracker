import { Logger } from '@nestjs/common';
import { ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { EventPublisher } from 'nestjs-eventstore';
import { MoralisService } from '@/shared/services/moralis.service';
import { ConfigService } from '@/shared/services/config.service';
import { WETH_CONTRACT_ADDRESS } from '@/assets/variable';
import { UpdatePriceCommand } from '../impl/update-price-command';

@CommandHandler(UpdatePriceCommand)
export class UpdatePriceHandler implements ICommandHandler<UpdatePriceCommand> {
    constructor(
        private readonly _publisher: EventPublisher,

    ) {}

    async execute(command: UpdatePriceCommand) {
        Logger.log('Async GetPriceHandler...', 'CreateUserCommand');

    }
}
