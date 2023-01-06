export interface BaseRepository<T> {
  getAll(): Promise<T[]>
  get(id: number): Promise<T>
  update(id, payload: T): Promise<T>
  create(entity: T): Promise<number>
  delete(id: number)
}
