import { maskCpfCnpj } from './maskCNPJCPF'

const mockCnpj = '02128369000100'
const mockCpf = '81768012083'

const mockCnpjMask = maskCpfCnpj('02128369000100')
const mockCpfMask = maskCpfCnpj('81768012083')

describe('Mask cnpj cpf', () => {
  test('not render string', () => {
    expect(maskCpfCnpj('ddss')).toBe('')
  })

  test('should format mask cpf', () => {
    expect(maskCpfCnpj(mockCpf)).toBe(mockCpfMask)
  })

  test('should format mask cnpj', () => {
    expect(maskCpfCnpj(mockCnpj)).toBe(mockCnpjMask)
  })
})
