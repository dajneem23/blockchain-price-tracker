import { plainToClass } from 'class-transformer';
import { Entity, Column, Index } from 'typeorm';
import { TokenPriceDto } from '../dtos/token-price.dto';
import { TokenPriceCreatedEvent } from '../events/impl/token-price-created.handler';
import { AbstractEntity } from '@/common/abstract.entity';

@Entity({ name: 'tokenPrices' })
export class TokenPrice extends AbstractEntity {
    @Column()
    id!: string;

    @Column()
    @Index()
    tokenName!: string;

    @Column()
    @Index({
        unique: true,
    })
    tokenAddress!: string;

    @Column()
    @Index()
    tokenSymbol!: string;

    @Column()
    tokenLogo!: number;

    @Column()
    tokenDecimals!: number;

    @Column()
    usdPrice!: number;

    @Column()
    usdPriceFormatted!: string;

    @Column()
    hrPercentChange!: number;

    @Column()
    exchangeAddress!: string;

    @Column()
    exchangeName!: string;

    @Column()
    toBlock!: string;

    @Column({
        type: 'boolean',
    })
    possibleSpam!: boolean;

    @Column({
        type: 'boolean',
    })
    verifiedContract!: boolean;

    @Column()
    @Index()
    pairAddress!: string;

    @Column()
    pairTotalLiquidityUsd!: number;

    toDto() {
        return plainToClass(TokenPriceDto, this);
    }

    create() {
        // TODO improve the naming of those functions ( something related to Events, maybe sth like onUserCreated() ... )
        this.apply(new TokenPriceCreatedEvent(this.toDto()));
    }

    // update() {
    //     this.apply(new UserUpdatedEvent(this.toDto()));
    // }

    // welcome() {
    //     this.apply(new UserWelcomedEvent(this.toDto()));
    // }

    // delete() {
    //     this.apply(new UserDeletedEvent(this.toDto()));
    // }
}
