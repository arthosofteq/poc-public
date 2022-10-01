import { Controller, Get, Param } from '@nestjs/common';
import { DatabaseService } from 'src/modules/database/database.service';
import { Database } from 'src/modules/database/models/database';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Databases')
@Controller('databases')
export class DatabaseController {
  constructor(
    private readonly service: DatabaseService,
  ) {}

  @Get(':id')
  @ApiResponse({ status: 200, type: Database, description: 'Returns database' })
  async get(@Param('id') id: string): Promise<Database> {
    return this.service.get(id);
  }

  @Get()
  @ApiResponse({ status: 200, type: Database, isArray: true, description: 'Returns list of databases' })
  async list(): Promise<Database[]> {
    return this.service.list();
  }
}
