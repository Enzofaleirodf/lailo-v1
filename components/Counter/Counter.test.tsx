import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Counter } from './Counter'
import { useCounterStore } from '@/store/counter-store'

describe('Counter', () => {
  beforeEach(() => {
    // Reset store state before each test
    useCounterStore.getState().reset()
  })

  it('renders with initial count of 0', () => {
    render(<Counter />)
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('increments count when + button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    await user.click(screen.getByText('+'))
    expect(screen.getByText('1')).toBeInTheDocument()
  })

  it('decrements count when - button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    await user.click(screen.getByText('+'))
    await user.click(screen.getByText('-'))
    expect(screen.getByText('0')).toBeInTheDocument()
  })

  it('resets count when Reset button is clicked', async () => {
    const user = userEvent.setup()
    render(<Counter />)
    
    await user.click(screen.getByText('+'))
    await user.click(screen.getByText('+'))
    await user.click(screen.getByText('Reset'))
    expect(screen.getByText('0')).toBeInTheDocument()
  })
})