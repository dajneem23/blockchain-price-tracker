import { MigrationInterface, QueryRunner } from "typeorm";

export class AiMirgation1729785248911 implements MigrationInterface {
    name = 'AiMirgation1729785248911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`token_logo\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`token_logo\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`pair_total_liquidity_usd\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`pair_total_liquidity_usd\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`pair_total_liquidity_usd\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`pair_total_liquidity_usd\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`token_logo\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`token_logo\` int NOT NULL`);
    }

}
