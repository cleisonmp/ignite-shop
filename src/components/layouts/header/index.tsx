import Image from 'next/future/image'
import { Container } from './headerStitches'
import { Handbag } from 'phosphor-react'
import logoImg from '../../../assets/logo.svg'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface HeaderProps {}

export const Header = () => {
  return (
    <Container>
      <Image src={logoImg} alt='ignite shop logo' />
      <Handbag size={32} />
    </Container>
  )
}
