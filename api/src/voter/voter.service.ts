import { Injectable } from '@nestjs/common';
import { AddVoterDto } from './dto/addVoterDto';
import { UpdateVoterDto } from './dto/updateVoterDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VoterService {
  constructor(private prisma: PrismaService) {}

  async add(data: AddVoterDto) {
    const voter = await this.prisma.eleitor.create({
      data,
    });

    return voter;
  }

  async update(data: UpdateVoterDto) {
    data.id = Number(data?.id);

    const voter = await this.prisma.eleitor.update({
      where: {
        id: data.id,
      },
      data,
    });

    return voter;
  }

  async remove(id: number) {
    const response = await this.prisma.eleitor.delete({
      where: { id },
    });

    return response;
  }

  async getOne(id: number) {
    const voter = await this.prisma.eleitor.findUnique({
      where: {
        id,
      },
    });

    return voter;
  }

  async getAll() {
    const voters = await this.prisma.eleitor.findMany();

    return voters;
  }
}
