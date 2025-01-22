import { Entity, Column } from 'typeorm';
    import { BaseEntity } from 'typeorm/repository/BaseEntity';
    import { UserRole } from './user-role.enum';

    @Entity()
    export class User extends BaseEntity {
      constructor(input?: Partial<User>) {
        super(input);
      }

      @Column()
      name: string;

      @Column()
      email: string;

      @Column({ type: 'enum', enum: UserRole, default: UserRole.USER })
      role: UserRole;
    }
