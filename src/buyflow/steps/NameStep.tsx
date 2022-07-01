import React, { useState } from 'react'

interface NameStepProps {
  cb: (newData: { [key: string]: string | number }) => void
}

const NameStep: React.FC<NameStepProps> = ({ cb }) => {
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')

  const onSubmit = () => {
    cb({ firstname, lastname })
  }

  return (
    <>
      <div>
        First name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setFirstname(value)
          }}
          value={firstname}
        ></input>
      </div>
      <div>
        Last name:{' '}
        <input
          type="text"
          onChange={({ target: { value } }) => {
            setLastname(value)
          }}
          value={lastname}
        ></input>
      </div>
      <button onClick={onSubmit}>Next</button>
    </>
  )
}

export default NameStep
