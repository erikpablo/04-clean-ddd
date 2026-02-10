import { QuestionCommentRepository } from '../repositories/question-comments-repository'

interface DeleteQuestionsCommentUseCaseRequest {
  authorId: string
  questionCommentId: string
}

interface DeleteQuestionsCommentUseCaseResponse {}

export class DeleteQuestionsCommentUseCase {
  constructor(private questionCommentsRepository: QuestionCommentRepository) {}
  async execute({
    authorId,
    questionCommentId,
  }: DeleteQuestionsCommentUseCaseRequest): Promise<DeleteQuestionsCommentUseCaseResponse> {
    const questionComment =
      await this.questionCommentsRepository.findById(questionCommentId)

    if (!questionComment) {
      throw new Error('Question comment not found')
    }

    if (questionComment.authorId.toString() !== authorId) {
      throw new Error('Not allowed')
    }

    await this.questionCommentsRepository.delete(questionComment)

    return { questionComment }
  }
}
