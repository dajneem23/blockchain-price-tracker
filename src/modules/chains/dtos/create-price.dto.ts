import { JOI_DEFAULT_VALIDATION_OPTIONS } from '@/common/validations';
import { ApiProperty } from '@nestjs/swagger';
import Joi from 'joi';
import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';

@JoiSchemaOptions(JOI_DEFAULT_VALIDATION_OPTIONS)
export class CreatePriceDto {
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
    @JoiSchema(Joi.number().required())
    tokenDecimals!: number;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    usdPrice!: number;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    usdPriceFormatted!: string;

    @ApiProperty()
    @JoiSchema(Joi.number().required())
    hrPercentChange!: number;

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
    possibleSpam!: boolean;

    @ApiProperty()
    @JoiSchema(Joi.boolean().required())
    verifiedContract!: boolean;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    pairAddress!: string;

    @ApiProperty()
    @JoiSchema(Joi.string().required())
    pairTotalLiquidityUsd!: string;
}
