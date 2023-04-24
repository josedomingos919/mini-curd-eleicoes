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
import { ElectionService } from './election.service';
import { AddElectionDto } from './dto/addElectionDto';

@Controller('election')
export class ElectionController {
  constructor(private electionService: ElectionService) {}

  @Post()
  add(@Body() data: AddElectionDto) {
    return this.electionService.add(data);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.electionService.remove(id);
  }

  @Get()
  getAll() {
    return this.electionService.getAll();
  }
}
