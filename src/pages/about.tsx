import { PrimaryLayout } from '../components/layouts/primary/'
import { NextPageWithLayout } from './page'

const About: NextPageWithLayout = () => {
  return (
    <section>
      <h2>Layout Example (About)</h2>
    </section>
  )
}

export default About

About.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
