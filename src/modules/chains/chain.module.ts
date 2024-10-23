import { ApolloFederationDriverConfig, ApolloFederationDriver } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { ChainsController } from './controllers/chains.controller';
import { CommandHandlers } from './commands/handlers';
import { QueryHandlers } from './queries/handlers/inde';
import { ChainsService } from './services/chains.service';
import { EthereumService } from './services/eth.service';
import { EthereumController } from './controllers/eth.controller';
import { TokenPriceRepository } from './repository/token-price.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventHandlers } from './events/handlers';

@Module({
    imports: [TypeOrmModule.forFeature([TokenPriceRepository])],
    controllers: [ChainsController, EthereumController],
    providers: [ChainsService, EthereumService, ...CommandHandlers, ...QueryHandlers, ...EventHandlers],
})
export class UsersModule {}
