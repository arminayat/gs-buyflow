import React, { useState } from 'react'
import { PRODUCT_IDS_TO_NAMES } from '../constants/product'
import Steps from './steps'
import { ProductIds } from './types'

interface BuyflowProps {
  productId: ProductIds
}

export interface ICollectedData {
  firstname?: string
  lastname?: string
  email: string
  age: number
}

const Buyflow: React.FC<BuyflowProps> = ({ productId }) => {
  const [collectedData, setCollectedData] = useState<ICollectedData>({
    firstname: '',
    lastname: '',
    email: '',
    age: 0,
  })

  const handleDataSubmit = (newData: { [key: string]: string | number }) => {
    setCollectedData({ ...collectedData, ...newData })
  }

  return (
    <>
      <h4>Buying {PRODUCT_IDS_TO_NAMES[productId]}</h4>
      <Steps
        productId={productId}
        handleDataSubmit={handleDataSubmit}
        collectedData={collectedData}
      />
    </>
  )
}

export default Buyflow
