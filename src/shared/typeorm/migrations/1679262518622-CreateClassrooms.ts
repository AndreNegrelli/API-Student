import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateClassrooms1679262518622 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'classrooms',
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true, generationStrategy: 'uuid', default: 'uuid_generate_v4()' },
                    { name: 'name', type: 'varchar' },
                    { name: 'number_of_students', type: 'integer' },
                    { name: 'created_at', type: 'timestamp', default: 'now()' },
                    { name: 'updated_at', type: 'timestamp', default: 'now()' }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('classrooms')
    }

}
