import { ReactElement } from 'react'
import { NextPageWithLayout } from './page'

import { PrimaryLayout } from '../components/layouts/primary/'
import { SampleCard } from '../components/common/cards/sample'
import { mockSampleCardProps } from '../components/common/cards/sample/SampleCard.mocks'

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h1>Next.js template</h1>

      <div>
        <SampleCard {...mockSampleCardProps.base} />
        <SampleCard {...mockSampleCardProps.base} />
      </div>
    </section>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}

export default Home
