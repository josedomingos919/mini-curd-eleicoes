import { ForbiddenException, Injectable } from '@nestjs/common';
import { AddElectionDto } from './dto/addElectionDto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ElectionService {
  constructor(private prisma: PrismaService) {}

  async add(data: AddElectionDto) {
    const eleicao = await this.prisma.eleicao.create({
      data: {
        tipo: data.tipo,
        finshed: data.finshed,
        candidatos: {
          create: data.candidatos.map((e) => {
            return {
              candidatoId: Number(e.candidatoId),
            };
          }),
        },

        eleitores: {
          create: data.eleitor.map((e) => {
            return {
              eleitorId: Number(e.eleitorId),
            };
          }),
        },
      },
    });

    return eleicao;
  }

  async getAll() {
    const eleicoes = await this.prisma.eleicao.findMany({});

    return eleicoes;
  }

  async remove(id: number) {
    const eleicao = await this.prisma.eleicao.delete({
      where: {
        id,
      },
    });

    return eleicao;
  }
}
