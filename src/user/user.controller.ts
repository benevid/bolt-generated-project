import { Controller, Get, Post, Body, Param, Put, Delete } from '@nestjs/common';
    import { UserService } from './user.service';
    import { CreateUserDto, UpdateUserDto } from './user.dto';
    import { User } from './user.entity';

    @Controller('users')
    export class UserController {
      constructor(private readonly userService: UserService) {}

      @Post()
      async create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.userService.createUser(createUserDto);
      }

      @Get()
      async findAll(): Promise<User[]> {
        return this.userService.findAllUsers();
      }

      @Get(':id')
      async findOne(@Param('id') id: number): Promise<User> {
        return this.userService.findUserById(id);
      }

      @Put(':id')
      async update(@Param('id') id: number, @Body() updateUserDto: UpdateUserDto): Promise<User> {
        return this.userService.updateUser(id, updateUserDto);
      }

      @Delete(':id')
      async remove(@Param('id') id: number): Promise<void> {
        return this.userService.deleteUser(id);
      }

      @Post(':id/generate-api-key')
      async generateApiKey(@Param('id') id: number): Promise<{ apiKey: string }> {
        const user = await this.userService.findUserById(id);
        if (!user) {
          throw new Error('User not found');
        }
        const apiKey = await this.userService.generateApiKey(user);
        return { apiKey };
      }
    }
