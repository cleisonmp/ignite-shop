import { ReactElement, useEffect } from 'react'
import { GetServerSideProps } from 'next'
import Image from 'next/future/image'
import Head from 'next/head'
import Link from 'next/link'
import { stripe, StripeProduct } from '../lib/services/stripe'

import { useShoppingCart } from '../lib/hooks/useShoppingCart'
import { PrimaryLayout } from '../components/layouts/primary'
import { NextPageWithLayout } from './page'
import {
  ImageContainer,
  SuccessContainer,
  ProductListContainer,
} from '../styles/pages/success'

interface Product {
  name: string
  imageUrl: string
}
interface SuccessProps {
  costumerName: string
  productList: Product[]
}

const Success: NextPageWithLayout<SuccessProps> = ({
  costumerName,
  productList,
}) => {
  const { clearCart } = useShoppingCart()

  useEffect(() => {
    clearCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <Head>
        <title>Purchase Confirmed | Ignite Shop</title>

        <meta name='robots' content='noindex' />
      </Head>
      <SuccessContainer>
        <h1>Purchase confirmed</h1>

        <ProductListContainer>
          {productList.map((product, index) => (
            <ImageContainer key={index}>
              <Image src={product.imageUrl} width={120} height={110} alt='' />
            </ImageContainer>
          ))}
        </ProductListContainer>

        <p>
          Uhuul <strong>{costumerName}</strong>, your {productList.length}{' '}
          t-shirts are already on it&apos;s way to your house.
        </p>

        <Link href='/'>Back to catalog</Link>
      </SuccessContainer>
    </>
  )
}
Success.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
export default Success

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const sessionId = String(query.session_id)

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  const costumerName = session?.customer_details?.name ?? ''

  const productList = session?.line_items?.data.map((data) => {
    const product = (data.price?.product as StripeProduct) ?? ''
    return {
      name: product.name,
      imageUrl: product.images[0],
    }
  })

  return {
    props: {
      costumerName,
      productList,
    },
  }
}
