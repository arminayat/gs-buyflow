import React, { FC, InputHTMLAttributes } from 'react'
import { ChangeHandler, RegisterOptions, useFormContext } from 'react-hook-form'

type registerFunction = (
  name: string,
  RegisterOptions?: RegisterOptions
) => {
  onChange: ChangeHandler
  onBlur: ChangeHandler
  name: string
  ref: React.Ref<any>
}

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register?: registerFunction
  name: string
}

export const ConnectForm = ({ children }: any) => {
  const methods = useFormContext()
  return children({ ...methods })
}

const Input: FC<InputProps> = ({ register = () => {}, name, ...rest }) => {
  return (
    <ConnectForm>
      {({
        register,
        formState: { errors },
      }: {
        register: registerFunction
        formState: any
      }) => (
        <>
          <input {...register(name)} {...rest} />
          <p>{errors[name]?.message}</p>
        </>
      )}
    </ConnectForm>
  )
}

export default Input
