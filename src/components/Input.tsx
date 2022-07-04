import React, { FC, InputHTMLAttributes } from 'react'
import { useFormContext, UseFormRegister, UseFormReturn } from 'react-hook-form'
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegister<any>
  name: string
}

export const ConnectForm = ({ children }: any) => {
  const methods = useFormContext()
  return children({ ...methods })
}

const Input: FC<InputProps> = ({ register = () => {}, name, ...rest }) => {
  return (
    <ConnectForm>
      {({ register, formState: { errors } }: UseFormReturn) => (
        <>
          <input {...register(`${name}` as const)} {...rest} />
          <p>{errors[name]?.message}</p>
        </>
      )}
    </ConnectForm>
  )
}

export default Input
