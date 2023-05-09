import {
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Controller,
  ParseIntPipe,
} from '@nestjs/common';
import { CandidateService } from './candidate.service';
import { AddCandidateDto } from './dto/addCandidateDto';
import { UpdateCandidateDto } from './dto/updateCandidateDto';

@Controller('candidate')
export class CandidateController {
  constructor(private voterService: CandidateService) { }

  @Post()
  add(@Body() data: AddCandidateDto) {
    return this.voterService.add(data);
  }

  @Put()
  update(@Body() data: UpdateCandidateDto) {
    return this.voterService.update(data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.voterService.remove(id);
  }

  @Get(':id')
  getOne(@Param('id', ParseIntPipe) id: number) {
    return this.voterService.getOne(id);
  }

  @Get()
  getAll() {
    return this.voterService.getAll();
  }

  @Get('eleicao/:id')
  getByEleicao(@Param('id', ParseIntPipe) id: number) {
    return this.voterService.getByEleicao(id);
  }
}
