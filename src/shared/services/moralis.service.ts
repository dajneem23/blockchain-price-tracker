import { ApiUtils } from '@moralisweb3/api-utils';
import { Core } from '@moralisweb3/common-core';
import { CommonEvmUtils } from '@moralisweb3/common-evm-utils';
import { EvmApi as MoralisEvmApi } from '@moralisweb3/evm-api';
import { Injectable } from '@nestjs/common';

import { ConfigService } from './config.service';

@Injectable()
export class MoralisService {
    core!: Core;
    commonEvmUtils!: CommonEvmUtils;
    apiUtils!: ApiUtils;
    evmApi!: MoralisEvmApi;
    constructor(private readonly _configService: ConfigService) {}

    async init() {
        this.core = Core.create();
        console.log('moralis started', this._configService.moralisConfig);
        await this.core
            .start({
                apiKey: this._configService.moralisConfig.apiKey,
            })
            .then(() => {
                console.log('moralis started');
            });
        this.commonEvmUtils = CommonEvmUtils.create(this.core);
        this.apiUtils = ApiUtils.create(this.core);
        this.evmApi = MoralisEvmApi.create(this.core);
        this.core.registerModules([this.commonEvmUtils, this.apiUtils, this.evmApi]);
    }
}
