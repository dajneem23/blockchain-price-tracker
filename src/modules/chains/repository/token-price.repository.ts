import { Repository, Entity } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

import { TokenPrice } from '../entities/token-price.entity';
import { CreatePriceDto } from '../dtos/create-price.dto';

@Entity()
export class TokenPriceRepository extends Repository<TokenPrice> {
    async createUser(createPriceDto: CreatePriceDto) {
        const id = uuidv4();
        const tokenPrice = await this.save(super.create({ ...{ id }, ...createPriceDto }));
        tokenPrice.create();
        return tokenPrice;
    }

    // async updateUser(userDto) {
    //     await super.update({ id: userDto.id }, userDto);
    //     const updatedUser = await super.findOne({ where: { id: userDto.id } });
    //     updatedUser.update();
    //     return updatedUser;
    // }

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
