import { MigrationInterface, QueryRunner } from "typeorm";

export class AiMirgation1729669399333 implements MigrationInterface {
    name = 'AiMirgation1729669399333'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`token_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`token_address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD UNIQUE INDEX \`IDX_c7fd0842eafb7c0de7f1041152\` (\`token_address\`)`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`token_symbol\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`token_logo\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`token_decimals\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`usd_price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`usd_price_formatted\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`hr_percent_change\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`exchange_address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`exchange_name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`to_block\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`possible_spam\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`verified_contract\` tinyint NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`pair_address\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`pair_total_liquidity_usd\` int NOT NULL`);
        await queryRunner.query(`CREATE INDEX \`IDX_25f77d0bc73132ab80385bb9f5\` ON \`tokenPrices\` (\`token_name\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_56c4d1b5946286e3f70565bb54\` ON \`tokenPrices\` (\`token_symbol\`)`);
        await queryRunner.query(`CREATE INDEX \`IDX_71172c59700a7e60b12b4302dd\` ON \`tokenPrices\` (\`pair_address\`)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_71172c59700a7e60b12b4302dd\` ON \`tokenPrices\``);
        await queryRunner.query(`DROP INDEX \`IDX_56c4d1b5946286e3f70565bb54\` ON \`tokenPrices\``);
        await queryRunner.query(`DROP INDEX \`IDX_25f77d0bc73132ab80385bb9f5\` ON \`tokenPrices\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`pair_total_liquidity_usd\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`pair_address\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`verified_contract\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`possible_spam\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`to_block\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`exchange_name\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`exchange_address\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`hr_percent_change\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`usd_price_formatted\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`usd_price\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`token_decimals\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`token_logo\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`token_symbol\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP INDEX \`IDX_c7fd0842eafb7c0de7f1041152\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`token_address\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`token_name\``);
    }

}
