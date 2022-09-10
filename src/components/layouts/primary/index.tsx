import { ReactNode, useCallback, useEffect } from 'react'
import { useRouter } from 'next/router'
import shallow from 'zustand/shallow'
import { useTransition, animated } from '@react-spring/web'
import { useShoppingCartDrawer } from '../../../lib/stores/ShoppingCartDrawer'

import { ShoppingCart } from '../../ShoppingCart'
import { Footer } from '../footer'
import { Header } from '../header'

import { Container } from './primaryStitches'

export interface PrimaryLayoutProps {
  children: ReactNode
}
//Data Fetching
//https://nextjs.org/docs/basic-features/layouts#data-fetching

export const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  const router = useRouter()
  const closeShoppingCart = useShoppingCartDrawer(
    useCallback((state) => state.closeShoppingCart, []),
    shallow,
  )
  const isShoppingCartOpen = useShoppingCartDrawer(
    (state) => state.isShoppingCartOpen,
  )

  useEffect(() => {
    closeShoppingCart()
  }, [closeShoppingCart, router.asPath])

  const transition = useTransition(isShoppingCartOpen, {
    initial: {
      position: 'absolute',
    },
    from: { opacity: 0.5, x: 500, right: 0, top: 0 },
    enter: { opacity: 1, x: 0, right: 0, top: 0 },
    leave: { opacity: 0.5, x: 500, right: 0, top: 0 },
    config: { mass: 1, tension: 220, friction: 26 },
  })

  return (
    <>
      <Container>
        <Header />
        {children}
        <Footer />
        {transition((styles, item) =>
          item ? (
            <animated.div style={{ position: 'absolute', ...styles }}>
              <ShoppingCart />
            </animated.div>
          ) : null,
        )}
      </Container>
    </>
  )
}
