import { Body, Controller, Post } from '@nestjs/common';
import { CreateTeamMemberBody } from './dtos/create-team-member-body';
import { MemberRepository } from './repositories/member-repository';

@Controller('app')
export class AppController {
  constructor(private memberRepository: MemberRepository) {}

  @Post('hello')
  async getHello(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body;

    await this.memberRepository.create(name, memberFunction);
  }
}
