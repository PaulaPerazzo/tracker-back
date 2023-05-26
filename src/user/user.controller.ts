import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { PrismaService } from 'prisma/prisma.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    return this.userService.createUser(createUserDto);
  }

  @Put(':id')
  async updateUser(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.userService.updateUser(id, updateUserDto);
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string) {
    return this.userService.deleteUser(id);
  }

  @Get(':id')
  async findUserById(@Param('id') id: string) {
    return this.userService.findUserById(id);
  }

  @Get(':email')
  async findUserByEmail(@Param('email') email: string) {
    return this.userService.findUserByEmail(email);
  }

  @Get()
  async findAllUsers() {
    return this.userService.findAllUsers();
  }
}
