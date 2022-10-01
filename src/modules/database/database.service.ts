import { Injectable } from '@nestjs/common';
import { Database } from 'src/modules/database/models/database';
import { DatabaseProvider } from 'src/modules/database/providers/database.provider';

@Injectable()
export class DatabaseService {
  constructor(
    private readonly provider: DatabaseProvider,
  ) {}

  async get(id: string): Promise<Database> {
    return this.provider.get(id);
  }

  async list(): Promise<Database[]> {
    return this.provider.list();
  }
}
