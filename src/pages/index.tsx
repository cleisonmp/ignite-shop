import { ReactElement } from 'react'
import Image from 'next/future/image'
import { useKeenSlider } from 'keen-slider/react'

import { NextPageWithLayout } from './page'
import { PrimaryLayout } from '../components/layouts/primary/'
import { HomeContainer, Product } from '../styles/pages/home'
import 'keen-slider/keen-slider.min.css'

import shirtOne from '../assets/shirts/1.png'
import shirtTwo from '../assets/shirts/2.png'
import shirtThree from '../assets/shirts/3.png'
import shirtFour from '../assets/shirts/4.png'

const Home: NextPageWithLayout = () => {
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
      <Product className='keen-slider__slide'>
        <Image src={shirtOne} width={520} height={480} alt='shirt' />

        <footer>
          <strong>Shirt X</strong>
          <span>U$ 29.90</span>
        </footer>
      </Product>

      <Product className='keen-slider__slide'>
        <Image src={shirtTwo} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>U$ 29.90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={shirtThree} width={520} height={480} alt='' />

        <footer>
          <strong>Shirt X</strong>
          <span>U$ 29.90</span>
        </footer>
      </Product>
      <Product className='keen-slider__slide'>
        <Image src={shirtFour} width={520} height={480} alt='' />

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
