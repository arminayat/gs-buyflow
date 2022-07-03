import React from 'react'
import Form from '../../components/Form'
import Input from '../../components/Input'
import * as yup from 'yup'

import { StepProps } from './types'

interface AgeStepProps extends StepProps {}

const validationSchema = yup
  .object({
    age: yup
      .number()
      .typeError('age must be a number')
      .positive('age must be greater than zero')
      .required('age is required'),
  })
  .required()

const AgeStep: React.FC<AgeStepProps> = ({ cb }) => {
  return (
    <Form onSubmit={cb} validationSchema={validationSchema}>
      <div>
        Age: <Input name="age" type="number" data-testid="age-input" />
      </div>
      <button type="submit">Next</button>
    </Form>
  )
}

export default AgeStep
