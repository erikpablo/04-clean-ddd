import { test, expect } from 'vitest'
import { AnswerQuestionUseCase } from './answer-question'

test('create an answer', () => {
  const answersQuestion = new AnswerQuestionUseCase()

  const answer = answersQuestion.execute({
    questionId: 'question-1',
    instructorId: 'instructor-1',
    content: 'Nova resposta',
  })

  expect(answer.content).toEqual('Nova resposta')
})
