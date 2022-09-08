import { ReactElement } from 'react'
import { NextPageWithLayout } from './page'

import { PrimaryLayout } from '../components/layouts/primary/'
import { SampleCard } from '../components/common/cards/sample'
import { mockSampleCardProps } from '../components/common/cards/sample/SampleCard.mocks'

import styles from '../styles/Home.module.css'

const Home: NextPageWithLayout = () => {
  return (
    <section className={styles.main}>
      <h1 className={styles.title}>Next.js template</h1>

      <div className={styles.grid}>
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
