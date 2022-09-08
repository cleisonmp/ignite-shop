import { ReactElement } from 'react'
import { GetStaticProps } from 'next'
import Image from 'next/future/image'
import { useKeenSlider } from 'keen-slider/react'

import { stripe, StripePrice } from '../lib/services/stripe'
import { formatCurrency } from '../lib/utils/formatCurrency'

import { NextPageWithLayout } from './page'
import { PrimaryLayout } from '../components/layouts/primary/'
import { HomeContainer, Product } from '../styles/pages/home'
import 'keen-slider/keen-slider.min.css'

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: number
  }[]
}

const Home: NextPageWithLayout<HomeProps> = ({ products }) => {
  //slider with arrows
  //https://codesandbox.io/s/github/rcbyr/keen-slider-sandboxes/tree/v6/navigation-controls/arrows-and-dots/react?file=/src/App.js:546-1014
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.55,
      spacing: 48,
    },
    //loop: true,
  })

  return (
    <HomeContainer ref={sliderRef} className='keen-slider'>
      {products.map((product) => {
        return (
          <Product key={product.id} className='keen-slider__slide'>
            <Image src={product.imageUrl} width={520} height={480} alt='' />

            <footer>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </footer>
          </Product>
        )
      })}
    </HomeContainer>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home

//export const getServerSideProps: GetServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as StripePrice
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: formatCurrency((price.unit_amount ?? 0) / 100),
    }
  })
  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, //2 hours
  }
}
