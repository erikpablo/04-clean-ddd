import { Answer } from '../entities/answer'

interface AnswerQuestionUseCaseRequest {
  questionId: string
  instructorId: string
  content: string
}

export class AnswerQuestionUseCase {
  execute({ questionId, instructorId, content }: AnswerQuestionUseCaseRequest) {
    const anser = new Answer(content)

    return anser
  }
}
