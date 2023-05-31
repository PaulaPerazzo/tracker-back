import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaService {
  user: any;
  constructor() {
    if (!PrismaService.prisma) {
      PrismaService.prisma = new PrismaClient();
    }
  }

  private static prisma: PrismaClient;

  public getPrismaClient() {
    return PrismaService.prisma;
  }

  async create(data: Prisma.UserCreateInput) {
    console.log('oioi');
    return await PrismaService.prisma.user.create({ data });
  }
}
