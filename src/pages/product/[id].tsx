//import { useRouter } from 'next/router'
import { NextPageWithLayout } from '../page'
import {
  ImageContainer,
  ProductContainer,
  ProductDetails,
} from '../../styles/pages/product'
import { PrimaryLayout } from '../../components/layouts/primary'
import { ReactElement } from 'react'

const Product: NextPageWithLayout = () => {
  //const { query } = useRouter()

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores
          aliquid rerum exercitationem facere a molestiae ut sed velit non
          mollitia? Officiis hic velit assumenda aspernatur nihil, sint sed
          laboriosam tempora?
        </p>

        <button>Add to Cart</button>
      </ProductDetails>
    </ProductContainer>
  )
}
Product.getLayout = function getLayout(page: ReactElement) {
  return <PrimaryLayout>{page}</PrimaryLayout>
}
export default Product
