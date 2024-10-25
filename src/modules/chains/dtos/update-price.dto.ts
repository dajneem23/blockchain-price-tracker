import { JOI_DEFAULT_VALIDATION_OPTIONS } from '@/common/validations';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import Joi from 'joi';
import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';

@JoiSchemaOptions(JOI_DEFAULT_VALIDATION_OPTIONS)
export class UpdatePriceDto {
    @JoiSchema(Joi.string())
    id!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    tokenName!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    tokenSymbol!: string;

    @ApiPropertyOptional({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    tokenLogo?: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    tokenDecimals!: string;

    @ApiProperty({ type: 'number' })
    @JoiSchema(Joi.number())
    @IsNumber()
    @IsOptional()
    usdPrice!: number;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    usdPriceFormatted!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    hrPercentChange!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    exchangeAddress!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    exchangeName!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    tokenAddress!: string;

    @ApiPropertyOptional({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    toBlock!: string;

    @ApiPropertyOptional({ type: 'boolean' })
    @JoiSchema(Joi.boolean())
    @IsBoolean()
    @IsOptional()
    possibleSpam?: boolean;

    @ApiPropertyOptional({ type: 'boolean' })
    @JoiSchema(Joi.boolean())
    @IsString()
    @IsOptional()
    verifiedContract?: boolean;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    pairAddress!: string;

    @ApiProperty({ type: 'string' })
    @JoiSchema(Joi.string())
    @IsString()
    @IsOptional()
    pairTotalLiquidityUsd?: string;
}
