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
import { VoterService } from './voter.service';
import { AddVoterDto } from './dto/addVoterDto';
import { UpdateVoterDto } from './dto/updateVoterDto';

@Controller('voter')
export class VoterController {
  constructor(private voterService: VoterService) { }

  @Post()
  add(@Body() data: AddVoterDto) {
    return this.voterService.add(data);
  }

  @Put()
  update(@Body() data: UpdateVoterDto) {
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
