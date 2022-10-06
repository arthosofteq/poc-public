import { Module } from '@nestjs/common';
import { DatabaseModule } from 'src/modules/database/database.module';
import { DatabaseProvider } from 'src/modules/database/providers/database.provider';
import { InMemoryDatabaseProvider } from 'src/modules/database/providers/in-memory.database.provider';

@Module({
  imports: [
    DatabaseModule.register({
      provide: DatabaseProvider,
      useClass: InMemoryDatabaseProvider,
    }),
    // import other modules here
  ]
})
export class AppModule {}
