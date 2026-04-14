import { RequiredFieldValidation } from '@/validation/required-field/required-field-validation'
import { RequiredFieldError } from '@/validation/errors'
import faker from 'faker'

describe('RequiredField Validation', () => {
  test('Should return error error if field is empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate('')
    expect(error).toEqual(new RequiredFieldError())
  })

  test('Should return falsy if field is not empty', () => {
    const sut = new RequiredFieldValidation('email')
    const error = sut.validate(faker.random.word())
    expect(error).toBeFalsy()
  })
})
