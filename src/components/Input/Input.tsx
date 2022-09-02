import { InputHTMLAttributes, useEffect, useState } from 'react'

import { maskCpfCnpj } from 'src/util/maskCNPJCPF'

import { validatorCPF } from 'src/util/validatorCPF'

import { validatorCNPJ } from 'src/util/validatorCNPJ'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  setValueMask: (value: string) => void
  value: string
}

const Input = ({ value, setValueMask }: InputProps) => {
  const [error, setError] = useState<boolean>(true)

  const VALUE_CPF_LENGTH: number = 14

  useEffect(() => {
    if (value.length === VALUE_CPF_LENGTH) {
      setError(validatorCPF(value))
    } else if (value.length > VALUE_CPF_LENGTH) {
      setError(validatorCNPJ(value))
    } else if (value.length === 0) {
      setError(true)
    }
  }, [value])

  function maskInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValueMask(maskCpfCnpj(e.target.value))
  }

  return (
    <div>
      <label>CPF/CNPJ</label>
      <input
        data-testid="cpf-input"
        maxLength={18}
        value={value}
        type="text"
        placeholder="example"
        onChange={maskInputValue}
      />
      <input data-testid="example" />
      {!error && <span data-testid="erro-span">Erro</span>}
    </div>
  )
}

export default Input
