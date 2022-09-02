import { render, screen } from '@testing-library/react'

import Input from './Input'

const mockCnpj = '02128369000100'
const mockCpf = '81768012083'

const cpfInvalid = '111.111.111-11'
const cnpjInvalid = '92.694.595/2111-40'

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

  test('should render cnpj validate', () => {
    const fn = jest.fn()

    render(<Input setValueMask={fn} value={mockCnpj} />)

    expect(screen.getByTestId('cpf-input')).toHaveValue(mockCnpj)
  })

  test('should render span error cpf', async () => {
    const fn = jest.fn()

    render(<Input setValueMask={fn} value={cpfInvalid} />)

    expect(screen.getByTestId('erro-span')).toBeInTheDocument()
  })

  test('should render span error cnpj', async () => {
    const fn = jest.fn()

    render(<Input setValueMask={fn} value={cnpjInvalid} />)

    expect(screen.getByTestId('erro-span')).toBeInTheDocument()
  })
})
