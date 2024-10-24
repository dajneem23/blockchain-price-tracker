import { ApiProperty } from '@nestjs/swagger';
import { Exclude, Expose } from 'class-transformer';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

import { AbstractDto } from '../../../common/dto/abstract.dto';
import { JOI_DEFAULT_VALIDATION_OPTIONS } from '@/common/validations';
import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';
import Joi from 'joi';

// {
//   "tokenName": "Kylin Network",
//   "tokenSymbol": "KYL",
//   "tokenLogo": "https://cdn.moralis.io/eth/0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c.png",
//   "tokenDecimals": "18",
//   "usdPrice": 19.722370676,
//   "usdPriceFormatted": "19.722370676",
//   "24hrPercentChange": "-0.8842730258590583",
//   "exchangeAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
//   "exchangeName": "Uniswap v3",
//   "tokenAddress": "0x67b6d479c7bb412c54e03dca8e1bc6740ce6b99c",
//   "toBlock": "16314545",
//   "possibleSpam": "false",
//   "verifiedContract": true,
//   "pairAddress": "0x1f98431c8ad98523631ae4a59f267346ea31f984",
//   "pairTotalLiquidityUsd": "123.45"
// }

@JoiSchemaOptions(JOI_DEFAULT_VALIDATION_OPTIONS)
export class TokenPriceDto extends AbstractDto {
    @ApiProperty()
    readonly id!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    tokenName!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    tokenSymbol!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().allow(null).optional())
    tokenLogo!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    tokenDecimals!: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    usdPrice!: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    usdPriceFormatted!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    hrPercentChange!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    exchangeAddress!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    exchangeName!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    tokenAddress!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    toBlock!: string;

    @ApiProperty()
    @JoiSchema(Joi.boolean().optional())
    possibleSpam!: string;

    @ApiProperty()
    @JoiSchema(Joi.boolean().optional())
    verifiedContract!: boolean;

    @ApiProperty()
    @JoiSchema(Joi.string().optional())
    pairAddress!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().optional())
    pairTotalLiquidityUsd!: string;
}
