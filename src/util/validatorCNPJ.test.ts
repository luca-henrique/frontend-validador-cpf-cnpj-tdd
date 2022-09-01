import { validatorCNPJ } from './validatorCNPJ'

const mockCNPJValid = '99711652000100'

const mockCNPJInvalid = '99711652000101'

const mockCNPJInvalidLegth = '9971165200010012'
const mockCNPJInvalidLetter = '997116520001001A'
const mockCNPJBeforeLast = '99711652000110'
const mockCNPJLast = '99711652000110'

describe('Validate CNPJ', () => {
  test('valid cnpj ', () => {
    expect(validatorCNPJ(mockCNPJValid)).toBe(true)
  })

  test('invalid cnpj ', () => {
    expect(validatorCNPJ(mockCNPJInvalid)).toBe(false)
  })

  test('invalid length cnpj ', () => {
    expect(validatorCNPJ(mockCNPJInvalidLegth)).toBe(false)
  })

  test('invalid have letter in cnpj ', () => {
    expect(validatorCNPJ(mockCNPJInvalidLetter)).toBe(false)
  })

  test('invalid before the last number cnpj ', () => {
    expect(validatorCNPJ(mockCNPJBeforeLast)).toBe(false)
  })

  test('invalid last number cnpj ', () => {
    expect(validatorCNPJ(mockCNPJLast)).toBe(false)
  })
})
