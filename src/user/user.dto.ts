import { UserRole } from './user-role.enum';

    export class CreateUserDto {
      name: string;
      email: string;
      role: UserRole;
    }

    export class UpdateUserDto {
      name?: string;
      email?: string;
      role?: UserRole;
    }
