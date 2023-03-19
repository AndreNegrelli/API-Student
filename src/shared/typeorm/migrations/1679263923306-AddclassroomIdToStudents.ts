import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddclassroomIdToStudents1679263923306 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('students', new TableColumn({
            name: 'classroom_id',
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('students', 
            new TableForeignKey({
                name: 'StudentClassroom',
                columnNames:['classroom_id'],
                referencedTableName : 'classrooms',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL'
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('students', 'StudentClassroom');
        await queryRunner.dropColumn('students', 'classroom_id');
    }

}
