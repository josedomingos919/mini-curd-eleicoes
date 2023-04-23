import { Injectable } from '@nestjs/common';
import { AddCandidateDto } from './dto/addCandidateDto';
import { UpdateCandidateDto } from './dto/updateCandidateDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CandidateService {
  constructor(private prisma: PrismaService) {}

  async add(data: AddCandidateDto) {
    const voter = await this.prisma.candidato.create({
      data,
    });

    return voter;
  }

  async update(data: UpdateCandidateDto) {
    data.id = Number(data?.id);

    const voter = await this.prisma.candidato.update({
      where: {
        id: data.id,
      },
      data,
    });

    return voter;
  }

  async remove(id: number) {
    const response = await this.prisma.candidato.delete({
      where: { id },
    });

    return response;
  }

  async getOne(id: number) {
    const voter = await this.prisma.candidato.findUnique({
      where: {
        id,
      },
    });

    return voter;
  }

  async getAll() {
    const voters = await this.prisma.candidato.findMany();

    return voters;
  }
}
