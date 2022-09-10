import { useCallback } from 'react'
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

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShoppingCartProps {}

//import { useTransition, animated, config } from 'react-spring/web'

export const ShoppingCart = () => {
  const closeShoppingCart = useShoppingCartDrawer(
    useCallback((state) => state.closeShoppingCart, []),
    shallow,
  )

  const handleCloseShoppingCart = () => {
    closeShoppingCart()
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
          <li>
            <ProductCard imageUrl='/shirt.png' />
            <ProductInfo>
              <ProductName>Shirt Name</ProductName>
              <ProductPrice>U$19.99</ProductPrice>
              <ButtonRemove>Remove</ButtonRemove>
            </ProductInfo>
          </li>
          <li>
            <ProductCard imageUrl='/shirt.png' />
            <ProductInfo>
              <ProductName>Shirt Name</ProductName>
              <ProductPrice>U$19.99</ProductPrice>
              <ButtonRemove>Remove</ButtonRemove>
            </ProductInfo>
          </li>
          <li>
            <ProductCard imageUrl='/shirt.png' />
            <ProductInfo>
              <ProductName>Shirt Name</ProductName>
              <ProductPrice>U$19.99</ProductPrice>
              <ButtonRemove>Remove</ButtonRemove>
            </ProductInfo>
          </li>
          <li>
            <ProductCard imageUrl='/shirt.png' />
            <ProductInfo>
              <ProductName>Shirt Name</ProductName>
              <ProductPrice>U$19.99</ProductPrice>
              <ButtonRemove>Remove</ButtonRemove>
            </ProductInfo>
          </li>
          <li>
            <ProductCard imageUrl='/shirt.png' />
            <ProductInfo>
              <ProductName>Shirt Name</ProductName>
              <ProductPrice>U$19.99</ProductPrice>
              <ButtonRemove>Remove</ButtonRemove>
            </ProductInfo>
          </li>
        </ul>
      </ProductListContainer>
      <SummaryContainer>
        <div>
          <SummaryDetailsContainer>
            <span>Quantity</span>
            <span id='totalItems'>5 items</span>
          </SummaryDetailsContainer>
          <SummaryDetailsContainer>
            <span id='totalCostLabel'>Total cost</span>
            <span id='totalCost'>U$248.88</span>
          </SummaryDetailsContainer>
        </div>
        <ButtonCheckout>Checkout</ButtonCheckout>
      </SummaryContainer>
    </Container>
  )
}
