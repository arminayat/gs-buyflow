import React, { useState } from 'react'
import AgeStep from './steps/AgeStep'
import EmailStep from './steps/EmailStep'
import SummaryStep from './steps/SummaryStep'
import { ProductIds } from './types'

interface BuyflowProps {
  productId: ProductIds
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.developerInsurance]: 'Developer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = ({ productId }) => {
  const [currentStep, setStep] = useState('email')
  const [collectedData, updateData] = useState({
    email: '',
    age: 0,
  })
  const getStepCallback = (nextStep: string) => (field: string, value: any) => {
    updateData({ ...collectedData, [field]: value })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {(currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />) ||
        (currentStep === 'age' && (
          <AgeStep cb={getStepCallback('summary')} />
        )) ||
        (currentStep === 'summary' && (
          <SummaryStep collectedData={collectedData} />
        ))}
    </>
  )
}

export default Buyflow
