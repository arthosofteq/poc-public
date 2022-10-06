import { Module, Provider } from '@nestjs/common';
import { DatabaseController } from 'src/modules/database/database.controller';
import { DatabaseService } from 'src/modules/database/database.service';

@Module({})
export class DatabaseModule {
  static register(databaseProvider: Provider) {
    return {
      module: DatabaseModule,
      controllers: [DatabaseController],
      providers: [
        DatabaseService,
        ...[databaseProvider],
      ],
    }
  }
}
