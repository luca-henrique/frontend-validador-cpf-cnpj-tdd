import { validatorCPF } from './validatorCPF'

const mockCpf = '81768012083'

const mockCpfLastDigitInvalid = '81768012081'
const mockCpfLastDigitAfterLastDotInvalid = '81768212081'
const mockCpfTestFirstIf = '435.925.864-58'

describe('Validate cpf', () => {
  test('cpf invalid', () => {
    expect(validatorCPF('111.111.111-11')).toBe(false)
  })

  test('cpf last digit invalid', () => {
    expect(validatorCPF(mockCpfLastDigitInvalid)).toBe(false)
  })

  test('cpf last last number after the first dot invalid', () => {
    expect(validatorCPF(mockCpfLastDigitAfterLastDotInvalid)).toBe(false)
  })

  test('cpf test first if', () => {
    expect(validatorCPF(mockCpfTestFirstIf)).toBe(false)
  })

  test('cpf valid', () => {
    expect(validatorCPF(mockCpf)).toBe(true)
  })
})
