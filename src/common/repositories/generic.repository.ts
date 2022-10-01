export abstract class IGenericRepository<T> {
    abstract get(id: string): Promise<T>
    abstract getAll(): Promise<T[]>
}
