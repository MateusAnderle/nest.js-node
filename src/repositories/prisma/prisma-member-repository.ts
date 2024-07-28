import { PrismaService } from 'src/database/prisma.service';
import { MemberRepository } from '../member-repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export class PrismaMemberRepository implements MemberRepository {
  constructor(private prisma: PrismaService) {}

  async create(name: string, memberFunction: string): Promise<void> {
    await this.prisma.teamMember.create({
      data: {
        name,
        function: memberFunction,
      },
    });
  }
}
