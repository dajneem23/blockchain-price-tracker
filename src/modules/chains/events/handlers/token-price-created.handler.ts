import { Logger } from '@nestjs/common';
import { IEventHandler, EventsHandler } from '@nestjs/cqrs';
import { TokenPriceCreatedEvent } from '../impl/token-price-created.handler';

@EventsHandler(TokenPriceCreatedEvent)
export class UserCreatedHandler implements IEventHandler<TokenPriceCreatedEvent> {
    handle(event: TokenPriceCreatedEvent) {
        Logger.log(event, 'TokenPriceCreatedEvent'); // write here
    }
}
