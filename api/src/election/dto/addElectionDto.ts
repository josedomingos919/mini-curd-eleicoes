export class AddElectionDto {
  tipo: string;
  finshed: number;
  candidatos: Array<{
    candidatoId: number;
  }>;
  eleitor: Array<{
    eleitorId: number;
  }>;
}
