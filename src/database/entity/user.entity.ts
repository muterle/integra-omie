import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm'

export enum UserStatusEnum {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id!: string

  @Column()
  name!: string

  @Column()
  login!: string

  @Column()
  password!: string
}
