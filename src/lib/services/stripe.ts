import Stripe from 'stripe'

export type StripePrice = Stripe.Price
export type StripeProduct = Stripe.Product
export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? '', {
  apiVersion: '2022-08-01',
  appInfo: {
    name: 'Ignite Shop',
  },
})
