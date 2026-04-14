import { InvalidFieldError } from '@/validation/errors'
import { MinLengthValidation } from './min-length-validation'
import faker from 'faker'

const makeSut = (): MinLengthValidation => new MinLengthValidation(faker.database.column(), 5)

describe('Min Length Validation', () => {
  test('Should return error if field length is less than min length', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(4))
    expect(error).toEqual(new InvalidFieldError())
  })

  test('Should return falsy if field length is equal or greater than min length', () => {
    const sut = makeSut()
    const error = sut.validate(faker.random.alphaNumeric(5))
    expect(error).toBeFalsy()
  })
})
