import { InputHTMLAttributes, useEffect, useState } from 'react'

import { maskCpfCnpj } from 'src/util/util'

import { validatorCPF } from 'src/util/validatorCPF'

import { validatorCNPJ } from 'src/util/validatorCNPJ'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  setValueMask: (value: string) => void
  value: string
}

const Input = ({ value, setValueMask }: InputProps) => {
  const [error, setError] = useState<boolean>(true)

  const VALUE_CPF_LENGTH: number = 14

  useEffect(() => {
    if (value.length <= VALUE_CPF_LENGTH) {
      setError(validatorCPF(value))
    } else if (value.length > VALUE_CPF_LENGTH) {
      setError(validatorCNPJ(value))
    } else if (value.length === 0) {
      setError(true)
    }
  }, [value])

  return (
    <div>
      <label>CPF/CNPJ</label>
      <input
        data-testid="cpf-input"
        maxLength={18}
        value={value}
        type="text"
        placeholder="example"
        onChange={e => setValueMask(maskCpfCnpj(e.target.value))}
      />
      {!error && <span>Erro</span>}
    </div>
  )
}

export default Input
