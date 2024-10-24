import { MigrationInterface, QueryRunner } from "typeorm";

export class AiMirgation1729799072235 implements MigrationInterface {
    name = 'AiMirgation1729799072235'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`tokenPrices\` (\`id\` varchar(36) NOT NULL, \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`token_name\` varchar(255) NOT NULL, \`token_address\` varchar(255) NOT NULL, \`token_symbol\` varchar(255) NOT NULL, \`token_logo\` varchar(255) NOT NULL, \`token_decimals\` varchar(255) NOT NULL, \`usd_price\` int NOT NULL, \`usd_price_formatted\` varchar(255) NOT NULL, \`hr_percent_change\` varchar(255) NOT NULL, \`exchange_address\` varchar(255) NOT NULL, \`exchange_name\` varchar(255) NOT NULL, \`to_block\` varchar(255) NOT NULL, \`possible_spam\` tinyint NOT NULL, \`verified_contract\` tinyint NOT NULL, \`pair_address\` varchar(255) NOT NULL, \`pair_total_liquidity_usd\` varchar(255) NOT NULL, INDEX \`IDX_25f77d0bc73132ab80385bb9f5\` (\`token_name\`), UNIQUE INDEX \`IDX_c7fd0842eafb7c0de7f1041152\` (\`token_address\`), INDEX \`IDX_56c4d1b5946286e3f70565bb54\` (\`token_symbol\`), INDEX \`IDX_71172c59700a7e60b12b4302dd\` (\`pair_address\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP INDEX \`IDX_71172c59700a7e60b12b4302dd\` ON \`tokenPrices\``);
        await queryRunner.query(`DROP INDEX \`IDX_56c4d1b5946286e3f70565bb54\` ON \`tokenPrices\``);
        await queryRunner.query(`DROP INDEX \`IDX_c7fd0842eafb7c0de7f1041152\` ON \`tokenPrices\``);
        await queryRunner.query(`DROP INDEX \`IDX_25f77d0bc73132ab80385bb9f5\` ON \`tokenPrices\``);
        await queryRunner.query(`DROP TABLE \`tokenPrices\``);
    }

}
