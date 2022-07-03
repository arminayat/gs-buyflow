import { act, fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import App from '../../App'

describe('App', () => {
  beforeEach(async () => {
    await act(async () => {
      render(<App />)
    })
  })

  it('should not let user to submit with empty firstname or lastname field with showing the proper warning message', async () => {
    fireEvent.click(screen.getByText('designer insurance'))

    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })

    expect(
      screen.getByText('firstname is a required field')
    ).toBeInTheDocument()

    fireEvent.input(screen.getByTestId('firstname-input'), {
      target: {
        value: 'Armin',
      },
    })

    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })

    expect(screen.getByText('lastname is a required field')).toBeInTheDocument()
  })

  it('should not let user to submit invalid email', async () => {
    const emailInputTestCases = [
      { value: 'armin@getsafe', message: 'email must be a valid email' },
      { value: 'armin', message: 'email must be a valid email' },
      { value: 'armingetsafe.de', message: 'email must be a valid email' },
      { value: '', message: 'email is a required field' },
    ]

    fireEvent.input(screen.getByTestId('firstname-input'), {
      target: {
        value: 'Armin',
      },
    })

    fireEvent.input(screen.getByTestId('lastname-input'), {
      target: {
        value: 'Ayat',
      },
    })

    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })

    for (let index = 0; index < emailInputTestCases.length; index++) {
      const testCase = emailInputTestCases[index]

      fireEvent.input(screen.getByTestId('email-input'), {
        target: {
          value: testCase.value,
        },
      })

      await act(async () => {
        fireEvent.click(screen.getByText('Next'))
      })

      expect(screen.getByText(testCase.message)).toBeInTheDocument()
    }
  })

  it('should not let user to submit the age less than 1', async () => {
    fireEvent.input(screen.getByTestId('firstname-input'), {
      target: {
        value: 'Armin',
      },
    })

    fireEvent.input(screen.getByTestId('lastname-input'), {
      target: {
        value: 'Ayat',
      },
    })

    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })

    fireEvent.input(screen.getByTestId('email-input'), {
      target: {
        value: 'armin@getsafe.de',
      },
    })
    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })

    fireEvent.input(screen.getByTestId('age-input'), {
      target: {
        value: '0',
      },
    })

    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })
    expect(
      screen.getByText('age must be greater than zero')
    ).toBeInTheDocument()

    fireEvent.input(screen.getByTestId('age-input'), {
      target: {
        value: '-1',
      },
    })

    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })
    expect(
      screen.getByText('age must be greater than zero')
    ).toBeInTheDocument()
  })

  it('should show submitted details successfully at the end of the flow in the summary page', async () => {
    fireEvent.input(screen.getByTestId('firstname-input'), {
      target: {
        value: 'Armin',
      },
    })

    fireEvent.input(screen.getByTestId('lastname-input'), {
      target: {
        value: 'Ayat',
      },
    })

    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })

    fireEvent.input(screen.getByTestId('email-input'), {
      target: {
        value: 'armin@getsafe.de',
      },
    })

    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })

    fireEvent.input(screen.getByTestId('age-input'), {
      target: {
        value: '24',
      },
    })

    await act(async () => {
      fireEvent.click(screen.getByText('Next'))
    })

    expect(screen.getByText(/^First name: Armin$/)).toBeInTheDocument()
    expect(screen.getByText(/^Last name: Ayat$/)).toBeInTheDocument()
    expect(screen.getByText(/^Email: armin@getsafe.de$/)).toBeInTheDocument()
    expect(screen.getByText(/^Age: 24$/)).toBeInTheDocument()
  })
})
