import { JOI_DEFAULT_VALIDATION_OPTIONS } from '@/common/validations';
import Joi from 'joi';
import { JoiSchema, JoiSchemaOptions } from 'nestjs-joi';

@JoiSchemaOptions(JOI_DEFAULT_VALIDATION_OPTIONS)
export class UpdatePriceDto {}
