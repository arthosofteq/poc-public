import { Database } from 'src/modules/database/models/database';

export abstract class DatabaseProvider {
  abstract get(id: string): Promise<Database>
  abstract list(): Promise<Database[]>
}
