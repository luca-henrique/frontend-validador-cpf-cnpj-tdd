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
  var soma = 0
  var resto

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
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i)

  resto = (soma * 10) % 11

  if (resto == 10 || resto == 11) resto = 0

  if (resto != parseInt(strCPF.substring(9, 10))) return false

  soma = 0

  for (i = 1; i <= 10; i++)
    soma = soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i)

  resto = (soma * 10) % 11

  if (resto == 10 || resto == 11) resto = 0

  if (resto != parseInt(strCPF.substring(10, 11))) return false

  return true
}

export function validaCNPJ(cnpj: string) {
  var b = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
  var c: any = String(cnpj).replace(/[^\d]/g, '')

  console.log(c)

  if (c.length !== 14) return false

  if (/0{14}/.test(c)) return false

  for (var i = 0, n = 0; i < 12; n += c[i] * b[++i]);
  if (c[12] != ((n %= 11) < 2 ? 0 : 11 - n)) return false

  for (var i = 0, n = 0; i <= 12; n += c[i] * b[i++]);
  if (c[13] != ((n %= 11) < 2 ? 0 : 11 - n)) return false

  console.log(c[13])

  return true
}
