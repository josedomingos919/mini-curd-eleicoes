import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { VoterModule } from './voter/voter.module';
import { PrismaService } from './prisma/prisma.service';
import { CandidateModule } from './candidate/candidate.module';

@Module({
  imports: [UserModule, VoterModule, CandidateModule],
  providers: [PrismaService],
})
export class AppModule {}
