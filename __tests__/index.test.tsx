import { render, screen } from '@testing-library/react'
import Home from '../src/pages'
//import userEvent from '@testing-library/user-event'

describe('Home', () => {
  it('should render a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: 'Next.js template',
    })

    expect(heading).toBeInTheDocument()
  })
})
