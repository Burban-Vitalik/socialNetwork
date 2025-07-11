import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
import { User as PrismaUser } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserInput: CreateUserInput): Promise<PrismaUser> {
    return this.prisma.user.create({ data: createUserInput });
  }

  async findByEmail(email: string): Promise<PrismaUser | null> {
    return await this.prisma.user.findFirst({
      where: { email },
    });
  }

  async findById(id: string): Promise<PrismaUser | null> {
    return await this.prisma.user.findUnique({
      where: { id },
    });
  }

  async update(
    id: string,
    updateUserInput: Partial<CreateUserInput>,
  ): Promise<PrismaUser> {
    return this.prisma.user.update({
      where: { id },
      data: updateUserInput,
    });
  }
}
