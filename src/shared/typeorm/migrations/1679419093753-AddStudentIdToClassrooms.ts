import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddStudentIdToClassrooms1679419093753 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('classrooms', new TableColumn({
            name: 'student_id',
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('classrooms', 
            new TableForeignKey({
                name: 'ClassroomsStudents',
                columnNames:['student_id'],
                referencedTableName : 'students',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL'
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('classrooms', 'ClassroomsStudents');
        await queryRunner.dropColumn('classrooms', 'student_id');
    }

}
