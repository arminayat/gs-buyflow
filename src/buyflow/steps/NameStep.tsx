import React from 'react'
import Form from '../../components/Form'
import Input from '../../components/Input'
import * as yup from 'yup'
import { StepProps } from './types'

interface NameStepProps extends StepProps {}

const validationSchema = yup
  .object({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
  })
  .required()

const NameStep: React.FC<NameStepProps> = ({ cb }) => {
  return (
    <Form onSubmit={cb} validationSchema={validationSchema}>
      <div>
        First name: <Input name="firstname" />
      </div>
      <div>
        Last name: <Input name="lastname" />
      </div>
      <button type="submit">Next</button>
    </Form>
  )
}

export default NameStep
