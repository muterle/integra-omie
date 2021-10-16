import { MigrationInterface, QueryRunner } from 'typeorm'

import * as bcrypt from 'bcrypt'

export class CreateUserAdmin1634394905313 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const password = bcrypt.hashSync('admin', 8)
    await queryRunner.query(
      `INSERT INTO [dbo].[user](name, login, password) VALUES('Administrador','admin', '${password}')`
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DELETE FROM [dbo].[user] WHERE login = 'admin'`)
  }
}
