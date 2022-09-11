import { useCallback, useState } from 'react'
import axios from 'axios'
import shallow from 'zustand/shallow'

import { X } from 'phosphor-react'
import { ProductCard } from '../common/cards/ProductCard'
import {
  ButtonCheckout,
  ButtonRemove,
  CloseButtonContainer,
  Container,
  ProductInfo,
  ProductListContainer,
  ProductName,
  ProductPrice,
  SummaryContainer,
  SummaryDetailsContainer,
} from './shoppingCartStitches'
import { useShoppingCartDrawer } from '../../lib/stores/ShoppingCartDrawer'
import { useShoppingCart } from '../../lib/hooks/useShoppingCart'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShoppingCartProps {}

//import { useTransition, animated, config } from 'react-spring/web'

export const ShoppingCart = () => {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const closeShoppingCart = useShoppingCartDrawer(
    useCallback((state) => state.closeShoppingCart, []),
    shallow,
  )
  const { products, getTotalCost, removeProduct } = useShoppingCart()

  const totalCost = getTotalCost()

  const handleCloseShoppingCart = () => {
    closeShoppingCart()
  }

  const handleRemoveItemFromCart = (productId: string) => {
    removeProduct(productId)
  }

  async function handleCheckout() {
    try {
      setIsCreatingCheckoutSession(true)
      const stripeProductList = products.map((product) => {
        return {
          price: product.priceId,
          quantity: 1,
        }
      })

      const response = await axios.post('/api/checkout', stripeProductList)

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Container>
      <CloseButtonContainer>
        <button onClick={handleCloseShoppingCart}>
          <X size={24} />
        </button>
      </CloseButtonContainer>
      <h2>Shopping bag</h2>
      <ProductListContainer>
        <ul>
          {products.map((product) => {
            return (
              <li key={product.id}>
                <ProductCard imageUrl={product.imageUrl} />
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>{product.formattedPrice}</ProductPrice>
                  <ButtonRemove
                    onClick={() => handleRemoveItemFromCart(product.id)}
                  >
                    Remove
                  </ButtonRemove>
                </ProductInfo>
              </li>
            )
          })}
        </ul>
      </ProductListContainer>
      <SummaryContainer>
        <div>
          <SummaryDetailsContainer>
            <span>Quantity</span>
            <span id='totalItems'>{`${products.length}  items`}</span>
          </SummaryDetailsContainer>
          <SummaryDetailsContainer>
            <span id='totalCostLabel'>Total cost</span>
            <span id='totalCost'>{totalCost}</span>
          </SummaryDetailsContainer>
        </div>
        <ButtonCheckout
          disabled={isCreatingCheckoutSession}
          onClick={handleCheckout}
        >
          Checkout
        </ButtonCheckout>
      </SummaryContainer>
    </Container>
  )
}
