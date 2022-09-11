import { useCallback, useEffect, useState } from 'react'
import shallow from 'zustand/shallow'
import { useShoppingCartData } from '../stores/ShoppingCartData'

//this hook is a workaround for zustand persist with next.js
export const useShoppingCart = () => {
  const products = useShoppingCartData((state) => state.products, shallow)
  const totalCost = useShoppingCartData((state) => state.totalCost)
  const {
    addProduct,
    removeProduct,
    clearCart,
    getTotalCost,
    isProductInCart,
  } = useShoppingCartData(
    useCallback((state) => state, []),
    shallow,
  )
  const [productsTemporaryData, setProductsTemporaryData] = useState<
    typeof products
  >([])

  useEffect(() => {
    setProductsTemporaryData(products)
  }, [products])

  return {
    products: productsTemporaryData,
    totalCost,
    addProduct,
    removeProduct,
    getTotalCost,
    isProductInCart,
    clearCart,
  }
}
