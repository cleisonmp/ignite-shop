import Image from 'next/image'
import { ImageContainer } from './productCardStitches'

interface ProductCardProps {
  imageUrl: string
}

export const ProductCard = ({ imageUrl }: ProductCardProps) => {
  return (
    <ImageContainer>
      <Image src={imageUrl} width={120} height={110} alt='' />
    </ImageContainer>
  )
}
