import React from 'react'
import { fireEvent, render, RenderResult } from '@testing-library/react'
import Input from './input'
import Context from '@/presentation/contexts/form/form-context'
import faker from 'faker'

type SutTypes = {
  sut: RenderResult
}

const makeSut = (fieldName: string): SutTypes => {
  const sut = render(
    <Context.Provider value={{ state: {} }}>
      <Input name={fieldName} />
    </Context.Provider>
  )
  return {
    sut
  }
}

describe('Input Component', () => {
  it('Should begin with readOnly', () => {
    const field = faker.database.column()
    const { sut } = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    expect(input.readOnly).toBe(true)
  })

  it('Should remove readOnly on focus', () => {
    const field = faker.database.column()
    const { sut } = makeSut(field)
    const input = sut.getByTestId(field) as HTMLInputElement
    fireEvent.focus(input)
    expect(input.readOnly).toBe(false)
  })
})
