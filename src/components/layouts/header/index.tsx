import Image from 'next/future/image'
import { Container, IconsContainer, MenuButton } from './headerStitches'
import { Handbag, Package, User } from 'phosphor-react'
import logoImg from '../../../assets/logo.svg'
import Link from 'next/link'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export const Header = () => {
  return (
    <Container>
      <Image src={logoImg} alt='ignite shop logo' />
      <IconsContainer>
        <Link href='/account'>
          <MenuButton>
            <User size={32} />
          </MenuButton>
        </Link>
        <Link href='/orders'>
          <MenuButton>
            <Package size={32} />
          </MenuButton>
        </Link>
        <MenuButton>
          <Handbag size={32} />
        </MenuButton>
      </IconsContainer>
    </Container>
  )
}
