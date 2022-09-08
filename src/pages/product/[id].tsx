import { ReactElement, useState } from 'react'
//import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/future/image'
import axios from 'axios'

import { stripe, StripePrice } from '../../lib/services/stripe'
import { formatCurrency } from '../../lib/utils/formatCurrency'

import { NextPageWithLayout } from '../page'
import { PrimaryLayout } from '../../components/layouts/primary'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    priceId: string
  }
}

const Product: NextPageWithLayout<ProductProps> = ({ product }) => {
  //const { query } = useRouter()
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  async function handleBuyButton() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: product.priceId,
      })

      const { checkoutUrl } = response.data

      window.location.href = checkoutUrl
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      alert('Falha ao redirecionar ao checkout!')
    }
  }
  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt='' />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button disabled={isCreatingCheckoutSession} onClick={handleBuyButton}>
          Add to Cart
        </button>
      </ProductDetails>
    </ProductContainer>
  )
}
Product.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
export default Product

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
    //TODO fallback: true,  change to true and create loading effect
  }
}

export const getStaticProps: GetStaticProps<
  ProductProps,
  { id: string }
> = async ({ params }) => {
  const productId = params?.id ?? ''

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })

  const price = product.default_price as StripePrice

  return {
    props: {
      product: {
        id: product.id ?? '',
        name: product.name ?? '',
        imageUrl: product.images[0] ?? '',
        price: formatCurrency((price.unit_amount ?? 0) / 100),
        description: product.description ?? '',
        priceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 hours
  }
}
