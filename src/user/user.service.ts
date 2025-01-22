import { Injectable, ForbiddenException } from '@nestjs/common';
    import { User } from './user.entity';
    import { Repository } from 'typeorm';
    import { InjectRepository } from '@nestjs/typeorm';
    import { CreateUserDto, UpdateUserDto } from './user.dto';
    import jwt from 'jsonwebtoken';

    @Injectable()
    export class UserService {
      constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
      ) {}

      async createUser(createUserDto: CreateUserDto): Promise<User> {
        const user = this.userRepository.create(createUserDto);
        return this.userRepository.save(user);
      }

      async findAllUsers(): Promise<User[]> {
        return this.userRepository.find();
      }

      async findUserById(id: number): Promise<User> {
        return this.userRepository.findOneBy({ id });
      }

      async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
        await this.userRepository.update(id, updateUserDto);
        return this.findUserById(id);
      }

      async deleteUser(id: number): Promise<void> {
        await this.userRepository.delete(id);
      }

      async generateApiKey(user: User): Promise<string> {
        if (user.role !== 'ADMIN') {
          throw new ForbiddenException('Only ADMIN users can generate API keys');
        }
        const token = jwt.sign({ userId: user.id }, process.env.AUTH_SECRET, { expiresIn: '1h' });
        return token;
      }
    }
