import './boilerplate.polyfill';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { TerminusModule } from '@nestjs/terminus';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EventStoreCqrsModule } from 'nestjs-eventstore';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { eventStoreBusConfig } from './providers/event-bus.provider';
import { ConfigService } from './shared/services/config.service';
import { SharedModule } from './shared.module';
import { ChainModule } from './modules/chains/chain.module';
import { HealthModule } from './modules/health/health.module';
import { ConfigModule } from '@nestjs/config';
import { ModelsModule } from './models.module';

@Module({
    imports: [
        ConfigModule.forRoot(), // ensure you have a configuration module
        TypeOrmModule.forRootAsync({
            imports: [SharedModule],
            useFactory: (configService: ConfigService) => configService.typeOrmConfig,
            inject: [ConfigService],
        }),
        EventStoreCqrsModule.forRootAsync(
            {
                useFactory: async (config: ConfigService) => {
                    return {
                        connectionSettings: config.eventStoreConfig.connectionSettings,
                        endpoint: config.eventStoreConfig.tcpEndpoint,
                    };
                },
                inject: [ConfigService],
            },
            eventStoreBusConfig,
        ),
        HealthModule,
        TerminusModule,
        ModelsModule,
        ChainModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}
