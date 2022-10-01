import { Injectable, NotFoundException } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { Database } from 'src/modules/database/models/database';
import { DatabaseProvider } from 'src/modules/database/providers/database.provider';

@Injectable()
export class InMemoryDatabaseProvider extends DatabaseProvider {
  private DBS = {
    list_db_1: {
      id: 'list_db_1',
      name: 'list_db_1',
      host: 'localhost',
      port: 6379,
    },
    list_db_2: {
      id: 'list_db_2',
      name: 'list_db_2',
      host: 'localhost',
      port: 6380,
      password: 'password'
    },
  };

  async get(id: string): Promise<Database> {
    const db = this.DBS[id];

    if (!db) {
      throw new NotFoundException('No db - no problems');
    }

    return plainToClass(Database, this.DBS[id]);
  }

  async list(): Promise<Database[]> {
    return plainToClass(Database, Object.values(this.DBS));
  }
}
