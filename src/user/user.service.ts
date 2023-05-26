import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { User } from '.prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        id: createUserDto.id,
        name: createUserDto.name,
        email: createUserDto.email,
        password: createUserDto.password,
        googleId: createUserDto.googleId,
      },
    });
  }

  async updateUser(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        name: updateUserDto.name,
        email: updateUserDto.email,
        password: updateUserDto.password,
        googleId: updateUserDto.googleId,
      },
    });
  }

  async deleteUser(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }

  async findUserById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  async findAllUsers(): Promise<User[]> {
    return this.prisma.user.findMany();
  }
}
