import { Entity } from '../../core/entities/entity'
import { UniqueEntityId } from '../../core/entities/unique-entity-id'
import { Optional } from '../../core/types/optional'
import { Slug } from './value-object/slug'

interface QuestionProps {
  authorId: UniqueEntityId
  bestAnswerId?: UniqueEntityId
  title: string
  slug: Slug
  content: string
  createdAt: Date
  updatedAt?: Date
}

export class Questions extends Entity<QuestionProps> {
  static create(
    props: Optional<QuestionProps, 'createdAt'>,
    id?: UniqueEntityId
  ) {
    const question = new Questions(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    )
    return question
  }
}
