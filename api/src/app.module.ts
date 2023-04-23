import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { UserModule } from './user/user.module';
import { VoterModule } from './voter/voter.module';

@Module({
  imports: [UserModule, VoterModule],
  providers: [PrismaService],
})
export class AppModule {}
