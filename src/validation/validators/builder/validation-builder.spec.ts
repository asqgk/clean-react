import { EmailValidation, RequiredFieldValidation } from '@/validation/validators'
import { ValidationBuilder as sut } from './validation-builder'
import faker from 'faker'
import { MinLengthValidation } from '../min-length/min-length-validation'

describe('ValidationBuilder', () => {
  test('Should return RequiredFieldValidation', () => {
    const fieldName = faker.database.column()
    const validations = sut.field(fieldName).required().build()
    expect(validations).toEqual([new RequiredFieldValidation(fieldName)])
  })

  test('Should return EmailValidation', () => {
    const fieldName = faker.database.column()
    const validations = sut.field(fieldName).email().build()
    expect(validations).toEqual([new EmailValidation(fieldName)])
  })

  test('Should return MinLengthValidation', () => {
    const fieldName = faker.database.column()
    const length = faker.random.number()
    const validations = sut.field(fieldName).min(length).build()
    expect(validations).toEqual([new MinLengthValidation(fieldName, length)])
  })

  test('Should return a list of validations', () => {
    const fieldName = faker.database.column()
    const length = faker.random.number()
    const validations = sut.field(fieldName).required().min(length).email().build()
    expect(validations).toEqual([
      new RequiredFieldValidation(fieldName),
      new MinLengthValidation(fieldName, length),
      new EmailValidation(fieldName)
    ])
  })
})
