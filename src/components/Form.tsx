import React, { FC, ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

interface FormProps {
  defaultValues?: { [key: string]: any }
  children: ReactNode
  onSubmit: (data: any) => void
  validationSchema?: any
}

const Form: FC<FormProps> = ({
  defaultValues,
  children,
  onSubmit,
  validationSchema,
}) => {
  const methods = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema),
  })
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
