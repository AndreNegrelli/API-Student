import {MigrationInterface, QueryRunner, TableColumn, TableForeignKey} from "typeorm";

export class AddTeacherIdToClassrooms1679263246693 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('classrooms', new TableColumn({
            name: 'teacher_id',
            type: 'uuid',
            isNullable: true
        }));

        await queryRunner.createForeignKey('classrooms', 
            new TableForeignKey({
                name: 'ClassroomsTeachers',
                columnNames:['teacher_id'],
                referencedTableName : 'teachers',
                referencedColumnNames: ['id'],
                onDelete: 'SET NULL'
            }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('classrooms', 'ClassroomsTeachers');
        await queryRunner.dropColumn('classrooms', 'teacher_id');
    }

}
