export const maskCpfCnpj = (v: string) => {
  v = v.replace(/\D/g, '')

  if (v.length <= 11) {
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d)/, '$1.$2')
    v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  } else {
    v = v.replace(/^(\d{2})(\d)/, '$1.$2')
    v = v.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    v = v.replace(/\.(\d{3})(\d)/, '.$1/$2')
    v = v.replace(/(\d{4})(\d)/, '$1-$2')
  }

  return v
}

export function validaCPF(cpf: string) {
  var Soma = 0
  var Resto

  var strCPF = String(cpf).replace(/[^\d]/g, '')

  if (strCPF.length !== 11) return false

  if (
    [
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
    ].indexOf(strCPF) !== -1
  )
    return false

  for (var i = 1; i <= 9; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)

  Resto = (Soma * 10) % 11

  if (Resto == 10 || Resto == 11) Resto = 0

  if (Resto != parseInt(strCPF.substring(9, 10))) return false

  Soma = 0

  for (i = 1; i <= 10; i++)
    Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

  Resto = (Soma * 10) % 11

  if (Resto == 10 || Resto == 11) Resto = 0

  if (Resto != parseInt(strCPF.substring(10, 11))) return false

  return true
}
