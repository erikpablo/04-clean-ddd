import { Entity } from '@/core/entities/entity'

interface InstructorProps {
  name: string
}
export class instructor extends Entity<InstructorProps> {
  constructor(props: InstructorProps, id?: string) {
    super(props, id)
  }
}
