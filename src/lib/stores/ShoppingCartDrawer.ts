import create from 'zustand'

interface ShoppingCartDrawerProps {
  isShoppingCartOpen: boolean
  openShoppingCart: () => void
  closeShoppingCart: () => void
  toggleShoppingCart: () => void
}

export const useShoppingCartDrawer = create<ShoppingCartDrawerProps>()(
  (set) => ({
    isShoppingCartOpen: false,
    openShoppingCart: () => set(() => ({ isShoppingCartOpen: true })),
    closeShoppingCart: () => set(() => ({ isShoppingCartOpen: false })),
    toggleShoppingCart: () =>
      set((state) => ({ isShoppingCartOpen: !state.isShoppingCartOpen })),
  }),
)
