import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import { Button } from '../src/components/Button'

describe('Button', () => {
  it('renders button with text and children elements', () => {
    render(
      <Button text="Add to Cart" className="primary" disabled={false}>
        <span>phosphoricons</span>
      </Button>,
    )
    const button = screen.getByText('Add to Cart')
    const span = screen.getByText('phosphoricons')
    expect(button).toBeInTheDocument()
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveAttribute('type', 'button')
    expect(button).toHaveClass('primary')
    expect(button).not.toBeDisabled()
    expect(span).toBeInTheDocument()
  })

  it('check function onClick', () => {
    const handleClick = jest.fn()
    render(<Button onClick={handleClick} text="Add to Cart" />)
    const button = screen.getByText('Add to Cart')
    button.click()
    expect(handleClick).toHaveBeenCalledTimes(1)
  })
})
