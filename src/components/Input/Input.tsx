import React, { InputHTMLAttributes, useEffect, useState } from 'react'

import { maskCpfCnpj, validaCPF } from 'src/util/util'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  placeholder?: string
  setValueMask: (value: string) => void
  value: string
}

const Input = ({ value, setValueMask }: InputProps) => {
  const [error, setError] = useState<boolean>(true)

  function maskInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setValueMask(maskCpfCnpj(e.target.value))
  }

  useEffect(() => {
    if (value.length > 13) {
      setError(validaCPF(value))
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
        onChange={maskInputValue}
      />
      {!error && <span>Erro</span>}
    </div>
  )
}

export default Input
