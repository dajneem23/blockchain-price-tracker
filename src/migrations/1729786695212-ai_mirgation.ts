import { MigrationInterface, QueryRunner } from "typeorm";

export class AiMirgation1729786695212 implements MigrationInterface {
    name = 'AiMirgation1729786695212'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`hr_percent_change\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`hr_percent_change\` varchar(255) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` DROP COLUMN \`hr_percent_change\``);
        await queryRunner.query(`ALTER TABLE \`tokenPrices\` ADD \`hr_percent_change\` int NOT NULL`);
    }

}
