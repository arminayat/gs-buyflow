import React, { useState } from 'react'
import AgeStep from './steps/AgeStep'
import EmailStep from './steps/EmailStep'
import NameStep from './steps/NameStep'
import SummaryStep from './steps/SummaryStep'
import { ProductIds } from './types'

interface BuyflowProps {
  productId: ProductIds
}

const PRODUCT_IDS_TO_NAMES = {
  [ProductIds.developerInsurance]: 'Developer Insurance',
  [ProductIds.designerInsurance]: 'Designer Insurance',
}

const Buyflow: React.FC<BuyflowProps> = ({ productId }) => {
  const [currentStep, setStep] = useState(
    productId === ProductIds.designerInsurance ? 'name' : 'email'
  )
  const [collectedData, updateData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    age: 0,
  })
  const getStepCallback = (nextStep: string) => (newData: {
    [key: string]: string | number
  }) => {
    updateData({ ...collectedData, ...newData })
    setStep(nextStep)
  }
  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {currentStep === 'name' && <NameStep cb={getStepCallback('email')} />}
      {currentStep === 'email' && <EmailStep cb={getStepCallback('age')} />}
      {currentStep === 'age' && <AgeStep cb={getStepCallback('summary')} />}
      {currentStep === 'summary' && (
        <SummaryStep collectedData={collectedData} productId={productId} />
      )}
    </>
  )
}

export default Buyflow
