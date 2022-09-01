const invalidsCpf = [
  '00000000000',
  '11111111111',
  '22222222222',
  '33333333333',
  '44444444444',
  '55555555555',
  '66666666666',
  '77777777777',
  '88888888888',
  '99999999999',
]

export function validatorCPF(cpf: string): boolean {
  var onlyNumbersCpf: string = String(cpf).replace(/[^\d]/g, '')

  if (onlyNumbersCpf.length !== 11) return false

  var soma: number = 0
  var resto: number

  const getLastNumberCpf = parseInt(onlyNumbersCpf.substring(10, 11))

  const getLastNumberAfterFirstDot = parseInt(onlyNumbersCpf.substring(9, 10))

  if (invalidsCpf.indexOf(onlyNumbersCpf) !== -1) return false

  for (var i = 1; i <= 9; i++)
    soma = soma + parseInt(onlyNumbersCpf.substring(i - 1, i)) * (11 - i)

  resto = (soma * 10) % 11

  if (resto == 10 || resto == 11) resto = 0

  if (resto !== getLastNumberAfterFirstDot) return false

  soma = 0

  for (i = 1; i <= 10; i++)
    soma = soma + parseInt(onlyNumbersCpf.substring(i - 1, i)) * (12 - i)

  resto = (soma * 10) % 11

  if (resto == 10 || resto == 11) resto = 0

  if (resto != getLastNumberCpf) return false

  return true
}
