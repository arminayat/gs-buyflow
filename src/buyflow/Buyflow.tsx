import React, { useState } from 'react'
import { PRODUCT_IDS_TO_NAMES } from '../constants/product'
import useGetProductBuyflowSteps from './hooks/useGetProductBuyflowSteps'
import AgeStep from './steps/AgeStep'
import EmailStep from './steps/EmailStep'
import NameStep from './steps/NameStep'
import SummaryStep from './steps/SummaryStep'
import { BuyflowSteps, ProductIds } from './types'

interface BuyflowProps {
  productId: ProductIds
}

const Buyflow: React.FC<BuyflowProps> = ({ productId }) => {
  const buyflowSteps = useGetProductBuyflowSteps(productId)

  const [collectedData, setCollectedData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    age: 0,
  })

  const [currentStep, setStep] = useState(buyflowSteps[0])
  const handleNextStep = () => {
    let nextStepIndex = buyflowSteps.indexOf(currentStep) + 1
    setStep(buyflowSteps[nextStepIndex])
  }

  const handleSubmit = (newData: { [key: string]: string | number }) => {
    setCollectedData({ ...collectedData, ...newData })
    handleNextStep()
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      {currentStep === BuyflowSteps.name && (
        <NameStep handleSubmit={handleSubmit} />
      )}
      {currentStep === BuyflowSteps.email && (
        <EmailStep handleSubmit={handleSubmit} />
      )}
      {currentStep === BuyflowSteps.age && (
        <AgeStep handleSubmit={handleSubmit} />
      )}
      {currentStep === BuyflowSteps.summary && (
        <SummaryStep collectedData={collectedData} productId={productId} />
      )}
    </>
  )
}

export default Buyflow
