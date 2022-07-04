import React from 'react'
import Form from '../../components/Form'
import Input from '../../components/Input'
import * as yup from 'yup'
import { StepProps } from './types'

interface EmailStepProps extends StepProps {}

const validationSchema = yup
  .object({
    email: yup.string().email().required(),
  })
  .required()

const EmailStep: React.FC<EmailStepProps> = ({ handleSubmit }) => {
  return (
    <Form onSubmit={handleSubmit} validationSchema={validationSchema}>
      <div>
        Email: <Input name="email" data-testid="email-input" />
      </div>
      <button type="submit">Next</button>
    </Form>
  )
}

export default EmailStep
