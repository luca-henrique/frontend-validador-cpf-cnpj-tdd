import { render, screen } from '@testing-library/react'

import Input from './Input'

const mockCnpj = '02128369000100'
const mockCpf = '81768012083'

describe('<Input />', () => {
  test('should have label', () => {
    const fn = jest.fn()

    render(<Input value="" setValueMask={fn} />)

    const getLabelText = screen.getByText('CPF/CNPJ')

    expect(getLabelText).toBeInTheDocument()
  })

  test('should have placegolder', () => {
    const fn = jest.fn()

    render(<Input value="" setValueMask={fn} />)

    const input = screen.getByPlaceholderText(/example/i)

    expect(input).toBeInTheDocument()
  })

  test('should have render cpf validate', () => {
    const fn = jest.fn()

    render(<Input setValueMask={fn} value={mockCpf} />)

    expect(screen.getByTestId('cpf-input')).toHaveValue(mockCpf)
  })

  test('should have render cnpj validate', () => {
    const fn = jest.fn()

    render(<Input setValueMask={fn} value={mockCnpj} />)

    expect(screen.getByTestId('cpf-input')).toHaveValue(mockCnpj)
  })
})
