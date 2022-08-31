import { validaCPF, validaCNPJ } from './util'

const mockCpf = '81768012083'
const mockCnpj = '02128369000100'

describe('Validate cpf', () => {
  test('cpf invalid', () => {
    expect(validaCPF('111.111.111-11')).toBe(false)
  })

  test('cpf valid', () => {
    expect(validaCPF(mockCpf)).toBe(true)
  })

  test('cnpj invalid', () => {
    expect(validaCNPJ('11.111.111/1111-11')).toBe(false)
  })

  test('cnpj valid', () => {
    expect(validaCNPJ(mockCnpj)).toBe(true)
  })
})
