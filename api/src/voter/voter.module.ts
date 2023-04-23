import { Module } from '@nestjs/common';
import { VoterService } from './voter.service';
import { VoterController } from './voter.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  controllers: [VoterController],
  providers: [VoterService, PrismaService],
})
export class VoterModule {}
