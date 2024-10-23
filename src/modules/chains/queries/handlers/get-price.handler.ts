import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';

import { LoggerService } from '../../../../shared/services/logger.service';
import { GetPriceQuery } from '../impl/get-price.query';
import { ConfigService } from '@/shared/services/config.service';
import { MoralisService } from '@/shared/services/moralis.service';
import { WETH_CONTRACT_ADDRESS } from '@/assets/variable';
import { GetTokenPriceResponseAdapter } from '@moralisweb3/common-evm-utils';

@QueryHandler(GetPriceQuery)
export class GetPriceHandler implements IQueryHandler<GetPriceQuery> {
    constructor(
        private readonly _logger: LoggerService,
        private readonly _moralisService: MoralisService,
        private readonly _configService: ConfigService,
    ) {}

    async execute(query: GetPriceQuery): Promise<GetTokenPriceResponseAdapter> {
        this._logger.log('[query] Async GetPriceQuery...');
        console.log('GetPriceQuery', query);
        const price = await this._moralisService.evmApi.token.getTokenPrice({
            chain: this._configService.chainData.ethereum.chainId,
            include: 'percent_change',
            address: WETH_CONTRACT_ADDRESS,
        });
        return price;
    }
}
