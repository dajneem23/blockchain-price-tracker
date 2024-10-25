import { JOI_DEFAULT_VALIDATION_OPTIONS } from '@/common/validations';
import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
import { JoiSchemaOptions } from 'nestjs-joi';

@JoiSchemaOptions(JOI_DEFAULT_VALIDATION_OPTIONS)
export class IdRequestParamsDto {
    @ApiProperty({ type: 'string' })
    @IsNotEmpty()
    @IsString()
    id!: string;
}
