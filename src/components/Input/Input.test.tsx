import Input from './Input'

import { render, screen } from '@testing-library/react'

describe('<Input />', () => {
  test('should have label', () => {
    const { debug } = render(<Input />)

    debug()

    const getLabelText = screen.getByText('CPF/CNPJ')

    expect(getLabelText).toBeInTheDocument()
  })

  test('should have placegolder', () => {
    render(<Input />)

    const input = screen.getByPlaceholderText(/example/i)

    expect(input).toBeInTheDocument()
  })
})
