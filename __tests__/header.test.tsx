import { render, screen } from '@testing-library/react'
import { Header } from '../src/components/layouts/header'

//import userEvent from '@testing-library/user-event'

describe('Header', () => {
  it('should display the logo', () => {
    render(<Header />)
    const shirtImage = screen.getByAltText('ignite shop logo')

    expect(shirtImage).toBeInTheDocument()
  })
})
