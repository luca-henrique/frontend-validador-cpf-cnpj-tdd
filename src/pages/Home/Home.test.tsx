import { Home } from './Home'
import { render } from '@testing-library/react'

describe('<Home />', () => {
  test('should be render Home', () => {
    render(<Home />)
  })
})
