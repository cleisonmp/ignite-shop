import { ReactElement } from 'react'
import { GetServerSideProps } from 'next'
import Image from 'next/future/image'
//import Head from 'next/head'
import Link from 'next/link'
import { stripe, StripeProduct } from '../lib/services/stripe'

import { PrimaryLayout } from '../components/layouts/primary'
import { NextPageWithLayout } from './page'
import { ImageContainer, SuccessContainer } from '../styles/pages/success'

interface SuccessProps {
  costumerName: string
  product: {
    name: string
    imageUrl: string
  }
}

const Success: NextPageWithLayout<SuccessProps> = ({
  costumerName,
  product,
}) => {
  return (
    <>
      <SuccessContainer>
        <h1>Purchase confirmed</h1>

        <ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt='' />
        </ImageContainer>

        <p>
          Uhuul <strong>{costumerName}</strong>, your{' '}
          <strong>{product.name}</strong> it&apos;s already on its way to your
          house.
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
  const product =
    (session?.line_items?.data[0]?.price?.product as StripeProduct) ?? ''

  return {
    props: {
      costumerName,
      product: {
        name: product.name,
        imageUrl: product.images[0],
      },
    },
  }
}
