import { render, screen } from '@testing-library/react'
import Home from '../src/pages'
//import userEvent from '@testing-library/user-event'

describe('Home', () => {
  it('should display a shirt', () => {
    render(<Home />)
    const shirtImage = screen.getByAltText('shirt')

    expect(shirtImage).toBeInTheDocument()
  })
})
