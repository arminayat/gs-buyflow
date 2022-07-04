import React, { FC, ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AnyObjectSchema } from 'yup'

interface FormProps {
  defaultValues?: { [key: string]: any }
  children: ReactNode
  onSubmit: (data: { [key: string]: any }) => void
  validationSchema?: AnyObjectSchema
}

const Form: FC<FormProps> = ({
  defaultValues,
  children,
  onSubmit,
  validationSchema,
}) => {
  const methods = useForm({
    defaultValues,
    resolver: validationSchema && yupResolver(validationSchema),
  })
  const { handleSubmit } = methods

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>{children}</form>
    </FormProvider>
  )
}

export default Form
