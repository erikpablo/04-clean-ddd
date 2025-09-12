import type { Slug } from './value-object/slug'
import { Entity } from '@/core/entities/entity'

interface QuestionProps {
  title: string
  slug: Slug
  content: string
  authorId: string
}

export class Questions extends Entity<QuestionProps> {
  constructor(props: QuestionProps, id?: string) {
    super(props, id)
  }
}
