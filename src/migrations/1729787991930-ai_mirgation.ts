import { MigrationInterface, QueryRunner } from "typeorm";

export class AiMirgation1729787991930 implements MigrationInterface {
    name = 'AiMirgation1729787991930'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`token_decimals\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`token_decimals\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`token_decimals\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`token_decimals\` int NOT NULL`);
    }

}
