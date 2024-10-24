import { JOI_DEFAULT_VALIDATION_OPTIONS } from '@/common/validations';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional } from 'class-validator';
import Joi from 'joi';
import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';

@JoiSchemaOptions(JOI_DEFAULT_VALIDATION_OPTIONS)
export class CreatePriceDto {
    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    id!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    tokenName!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    tokenSymbol!: string;

    @ApiPropertyOptional({ type: 'string' })
    @JoiSchema(Joi.string().allow(null).optional().default(''))
    @IsOptional()
    tokenLogo?: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    tokenDecimals!: string;

    @ApiProperty({ type: 'number' })
    @JoiSchema(Joi.number().required())
    @IsNotEmpty()
    usdPrice!: number;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    usdPriceFormatted!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    hrPercentChange!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    exchangeAddress!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    exchangeName!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    tokenAddress!: string;

    @ApiPropertyOptional({ type: 'string' })
    @JoiSchema(Joi.string().optional().default(''))
    @IsOptional()
    toBlock!: string;

    @ApiPropertyOptional({ type: 'string' })
    @JoiSchema(Joi.boolean().optional().default(false))
    possibleSpam?: boolean;

    @ApiPropertyOptional({ type: 'string' })
    @JoiSchema(Joi.boolean().optional().default(false))
    verifiedContract?: boolean;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().required())
    @IsNotEmpty()
    pairAddress!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string().default(''))
    @IsOptional()
    pairTotalLiquidityUsd?: string;
}
