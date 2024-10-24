import { Injectable } from '@nestjs/common';
import { Repository, Entity, EntityRepository, DataSource } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { TokenPrice } from '../entities/token-price.entity';
import { CreatePriceDto } from '../dtos/create-price.dto';

@Injectable()
export class TokenPriceRepository extends Repository<TokenPrice> {
    constructor(private dataSource: DataSource) {
        super(TokenPrice, dataSource.createEntityManager(), dataSource.createQueryRunner());
    }

    async createTokenPrice(createPriceDto: CreatePriceDto) {
        const id = uuidv4();
        const tokenPrice = await this.save(super.create({ ...{ id }, ...createPriceDto }));
        tokenPrice.create();
        return tokenPrice;
    }

    async updateTokenPrice(dto) {
        await super.update({ id: dto.id }, dto);
        const updatedUser = await super.findOne({ where: { id: dto.id } });
        if (!updatedUser) {
            throw new Error('TokenPrice not found');
        }
        updatedUser.update();
        return updatedUser;
    }

    // async deleteUser(userDto) {
    //     // Todo
    //     const user = await super.findOne({ where: { id: userDto.id } });
    //     await super.delete({ id: userDto.id });
    //     user.delete();
    //     return user;
    // }

    // async welcomeUser(userDto) {
    //     // Todo
    //     const user = await super.findOne({ where: { id: userDto.id } });
    //     user.welcome();
    //     return user;
    // }
}
