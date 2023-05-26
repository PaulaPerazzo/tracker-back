import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export class PrismaService {
  user: any;
  constructor() {
    if (!PrismaService.prisma) {
      PrismaService.prisma = prisma;
    }
  }

  private static prisma: PrismaClient;

  public getPrismaClient() {
    return PrismaService.prisma;
  }
}
