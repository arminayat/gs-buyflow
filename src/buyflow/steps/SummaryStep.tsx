import React from 'react'
import { Link } from 'react-router-dom'
import { ProductIds } from '../types'

interface SummaryStepProps {
  productId: ProductIds
  collectedData: {
    firstname?: string
    lastname?: string
    email: string
    age: number
  }
}

const SummaryStep: React.FC<SummaryStepProps> = ({
  collectedData,
  productId,
}) => {
  return (
    <>
      {productId === ProductIds.designerInsurance && (
        <>
          <div>First name: {collectedData.firstname}</div>
          <div>Last name: {collectedData.lastname}</div>
        </>
      )}
      <div>Email: {collectedData.email}</div>
      <div>Age: {collectedData.age}</div>
      <div>
        <Link to={`/purchased=${productId}`}>Purchase</Link>
      </div>
    </>
  )
}

export default SummaryStep
