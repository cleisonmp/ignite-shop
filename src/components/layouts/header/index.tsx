import { useCallback } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import Image from 'next/future/image'
import shallow from 'zustand/shallow'
import { useShoppingCartDrawer } from '../../../lib/stores/ShoppingCartDrawer'

import { Handbag, Package, User } from 'phosphor-react'
import {
  ButtonHome,
  Container,
  IconsContainer,
  MenuButton,
} from './headerStitches'
import logoImg from '../../../assets/logo.svg'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export const Header = () => {
  const router = useRouter()
  const openShoppingCart = useShoppingCartDrawer(
    useCallback((state) => state.openShoppingCart, []),
    shallow,
  )
  const handleOpenShoppingCart = () => {
    openShoppingCart()
  }

  const handleButtonHomeClick = () => {
    router.push('/')
  }

  return (
    <Container>
      <ButtonHome onClick={handleButtonHomeClick}>
        <Image src={logoImg} alt='ignite shop logo' />
      </ButtonHome>
      <IconsContainer>
        <Link
          //href='/account'
          href='#'
        >
          <MenuButton>
            <User size={32} />
          </MenuButton>
        </Link>
        <Link
          //href='/orders'
          href='#'
        >
          <MenuButton>
            <Package size={32} />
          </MenuButton>
        </Link>
        <MenuButton onClick={handleOpenShoppingCart}>
          <Handbag size={32} />
        </MenuButton>
      </IconsContainer>
    </Container>
  )
}
