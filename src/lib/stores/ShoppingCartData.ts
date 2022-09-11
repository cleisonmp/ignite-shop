import create from 'zustand'
import { persist } from 'zustand/middleware'
import packageJson from '../../../package.json'
import { formatCurrency } from '../utils/formatCurrency'

interface ProductData {
  id: string
  name: string
  imageUrl: string
  price: number
  formattedPrice: string
  description: string
  priceId: string
}
interface ShoppingCartDataProps {
  products: ProductData[]
  totalCost: string
  addProduct: (product: ProductData) => void
  removeProduct: (productId: string) => void
  clearCart: () => void
  getTotalCost: () => string
  isProductInCart: (productId: string) => boolean
}

export const useShoppingCartData = create<ShoppingCartDataProps>()(
  persist(
    (set, get) => ({
      products: [],
      totalCost: 'U$0',
      addProduct: (product) =>
        set((shoppingCartState) => {
          if (shoppingCartState.products.find((p) => p.id === product.id)) {
            return shoppingCartState
          }
          return { products: [...shoppingCartState.products, product] }
        }),
      removeProduct: (productId) =>
        set((shoppingCartState) => {
          const shoppingCartWithoutRemovedItem =
            shoppingCartState.products.filter(
              (product) => product.id !== productId,
            )

          return { products: shoppingCartWithoutRemovedItem }
        }),
      clearCart: () =>
        set(() => {
          return { products: [] }
        }),
      getTotalCost: () => {
        const newItemsPriceSum = get().products.reduce(
          (sum, item) => sum + item.price,
          0,
        )
        return formatCurrency((newItemsPriceSum ?? 0) / 100)
      },
      isProductInCart: (productId) =>
        !!get().products.find((p) => p.id === productId),
    }),
    {
      name: `storage-${packageJson.name}-${packageJson.version}`,
    },
  ),
)
