import { CreatePriceDto } from '../dtos/create-price.dto';
import { PriceService } from './price.service';
import { Test, TestingModule } from '@nestjs/testing';
import Moralis from 'moralis';
import { AppController } from '@/app.controller';
import { AppService } from '@/app.service';
import { TerminusModule } from '@nestjs/terminus';
import { ChainModule } from '../chain.module';
import { SharedModule } from '@/shared.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigService } from '@/shared/services/config.service';

describe('PriceService', () => {
    let priceService: PriceService;
    let app: TestingModule;

    beforeAll(async () => {
        app = await Test.createTestingModule({
            imports: [
                ChainModule,
                TypeOrmModule.forRootAsync({
                    imports: [SharedModule],
                    useFactory: (configService: ConfigService) => configService.typeOrmConfig,
                    inject: [ConfigService],
                }),
            ],
            controllers: [AppController],
            providers: [AppService],
        }).compile();

        priceService = app.get<PriceService>(PriceService);
    });

    // describe('getPrice', () => {
    //     it('should return "Hello World!"', async () => {
    //         expect(await priceService.getPrice({})).toEqual('Hello World!');
    //     });
    // });

    it('should return TokenPrice', async () => {
        expect(
            await priceService.getPrice({
                id: '1',
            }),
        ).toReturn();
    });

    it('should return createPriceDto', async () => {
        await Moralis.start({
            apiKey: process.env.MORALIS_API_KEY,
        });

        const price = (
            await Moralis.EvmApi.token.getTokenPrice({
                chain: '0x1',
                include: 'percent_change',
                address: '0x7d1afa7b718fb893db30a3abc0cfc608aacfebb0',
            })
        ).toJSON();
        console.log({ price });
        const createPriceDto: CreatePriceDto = {
            id: '1',
            tokenName: price.tokenName!,
            tokenSymbol: price.tokenSymbol!,
            tokenAddress: price.tokenAddress!,
            tokenLogo: price.tokenLogo!,
            tokenDecimals: price.tokenDecimals!,
            usdPrice: price.usdPrice!,
            usdPriceFormatted: price.usdPriceFormatted!,
            hrPercentChange: price['24hrPercentChange']!,
            exchangeAddress: price.exchangeAddress!,
            exchangeName: price.exchangeName!,
            toBlock: price.toBlock!,
        };

        expect(await priceService.createPrice(createPriceDto));
    });
});
