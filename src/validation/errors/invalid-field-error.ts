export const InvalidFieldError = class extends Error {
  constructor () {
    super('Invalid email')
    this.name = 'InvalidFieldError'
  }
}
