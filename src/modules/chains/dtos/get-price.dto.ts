import { JOI_DEFAULT_VALIDATION_OPTIONS } from '@/common/validations';
import Joi from 'joi';
import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';

@JoiSchemaOptions(JOI_DEFAULT_VALIDATION_OPTIONS)
export class GetPriceDto {
    @JoiSchema(Joi.string().required())
    tokenId!: string;
}

export class GetPriceRequestParamsDto {
    @JoiSchema(Joi.string())
    tokenId!: string;
}
