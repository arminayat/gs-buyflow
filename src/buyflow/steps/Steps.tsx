import React, { FC, useState } from 'react'
import useGetProductBuyflowSteps from '../hooks/useGetProductBuyflowSteps'
import AgeStep from './AgeStep'
import EmailStep from './EmailStep'
import NameStep from './NameStep'
import SummaryStep from './SummaryStep'
import { BuyflowSteps, ProductIds } from '../types'
import { ICollectedData } from '../Buyflow'

interface StepsProps {
  productId: ProductIds
  handleDataSubmit: (newData: { [key: string]: string | number }) => void
  collectedData: ICollectedData
}

const Steps: FC<StepsProps> = ({
  productId,
  handleDataSubmit,
  collectedData,
}: any) => {
  const buyflowSteps = useGetProductBuyflowSteps(productId)
  const [currentStep, setStep] = useState(buyflowSteps[0])

  const handleNextStep = () => {
    let nextStepIndex = buyflowSteps.indexOf(currentStep) + 1
    setStep(buyflowSteps[nextStepIndex])
  }

  const handleSubmit = (newData: { [key: string]: string | number }) => {
    handleDataSubmit(newData)
    handleNextStep()
  }

  switch (currentStep) {
    case BuyflowSteps.name:
      return <NameStep handleSubmit={handleSubmit} />
    case BuyflowSteps.email:
      return <EmailStep handleSubmit={handleSubmit} />
    case BuyflowSteps.age:
      return <AgeStep handleSubmit={handleSubmit} />
    case BuyflowSteps.summary:
      return <SummaryStep collectedData={collectedData} productId={productId} />
    default:
      return null
  }
}

export default Steps
