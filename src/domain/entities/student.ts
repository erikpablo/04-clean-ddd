import { randomUUID } from 'node:crypto'

export class Student {
  private id: string
  private name: string

  constructor(name: string, id?: string) {
    this.name = name
    this.id = id ?? randomUUID()
  }
}
