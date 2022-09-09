import Image from 'next/future/image'
import { Container } from './footerStitches'
import githubLogo from '../../../assets/githubLogo.svg'

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface FooterProps {}

export const Footer = () => {
  return (
    <Container>
      <a
        href={'https://github.com/cleisonmp/ignite-shop'}
        target='_blank'
        rel='author noopener noreferrer'
      >
        <Image src={githubLogo} alt='github logo' width={48} />
      </a>
    </Container>
  )
}
