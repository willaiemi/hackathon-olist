import {  MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export default class CreateQuestions1588525545920
implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);

    await queryRunner.createTable(
      new Table({
        name: 'questions',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            generationStrategy: 'uuid',
            isPrimary: true,
            default: 'uuid_generate_v4()',
          },
          {
            name: 'category_id',
            type: 'uuid',
          },
          {
            name: 'text',
            type: 'varchar',
          },
          {
            name: 'intent_type',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );

    await queryRunner.createForeignKey(
      'questions',
      new TableForeignKey({
        name: 'questionForeignKeyToCategories',
        referencedColumnNames: ['id'],
        referencedTableName: 'categories',
        columnNames: ['category_id'],
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey(
      'questions',
      'questionForeignKeyToCategories',
    );

    await queryRunner.dropTable('questions');
  }
}
