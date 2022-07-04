import { BuyflowSteps, ProductIds } from '../types'

// these details can come from a cms or an api
const productsBuyflowSteps = {
  [ProductIds.developerInsurance]: [
    BuyflowSteps.email,
    BuyflowSteps.age,
    BuyflowSteps.summary,
  ],
  [ProductIds.designerInsurance]: [
    BuyflowSteps.name,
    BuyflowSteps.email,
    BuyflowSteps.age,
    BuyflowSteps.summary,
  ],
}

const useGetProductBuyflowSteps = (productId: ProductIds) =>
  productsBuyflowSteps[productId]

export default useGetProductBuyflowSteps
