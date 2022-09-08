import { ReactNode } from 'react'
import { Header } from '../header'

import { Container } from './primaryStitches'

export interface PrimaryLayoutProps {
  children: ReactNode
}
//Data Fetching
//https://nextjs.org/docs/basic-features/layouts#data-fetching

export const PrimaryLayout = ({ children }: PrimaryLayoutProps) => {
  return (
    <>
      <Container>
        <Header />
        <main>{children}</main>
        <footer>Footer</footer>
      </Container>
    </>
  )
}
