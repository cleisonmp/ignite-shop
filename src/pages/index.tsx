import { ReactElement } from 'react'
import Image from 'next/future/image'

import { NextPageWithLayout } from './page'
import { PrimaryLayout } from '../components/layouts/primary/'
import { HomeContainer, Product } from '../styles/pages/home'

import shirtOne from '../assets/shirts/1.png'
import shirtTwo from '../assets/shirts/2.png'
//import shirtThree from '../assets/shirts/3.png'
//import shirtFour from '../assets/shirts/4.png'

const Home: NextPageWithLayout = () => {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirtOne} width={520} height={480} alt='shirt' />

        <footer>
          <strong>Shirt X</strong>
          <span>U$ 29.90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirtTwo} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>U$ 29.90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home
