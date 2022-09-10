import { styled } from '../../styles'

/*const goIn = keyframes({
  '0%': {
    transform: 'translateX(100%)',
  },
  '100%': {
    transform: 'translateX(0)',
  },
})
*/
export const Container = styled('div', {
  backgroundColor: '$gray800',
  width: '30rem',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '2rem',
  padding: '3rem',
  paddingTop: '1.5rem',

  //position: 'absolute',
  //marginRight: 0,
  //right: 0,
  overflow: 'hidden',

  //transform: 'translateX(-100%)',
  //opacity: 1,
  //transition: 'all 10.2s ease-in-out',
  //animation: `${goIn} ease-in-out 1s`,

  fontSize: '$md',

  h2: {
    fontSize: '$lg',
    fontWeight: '700',
  },
})
export const CloseButtonContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',

  button: {
    backgroundColor: 'transparent',
    color: '$white',
    border: 'none',
    cursor: 'pointer',
    opacity: 0.5,
    transitionDuration: '200ms',

    '&:hover': {
      transform: 'scale(1.1)',
      opacity: 1,
    },
  },
})

export const ProductListContainer = styled('div', {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '1.5rem',

  li: {
    display: 'flex',
    marginBottom: '1rem',
  },
})
export const ProductInfo = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  padding: '0.25rem',
  marginLeft: '1rem',
})
export const ProductName = styled('span', {
  color: '$gray300',
  //fontWeight: '400',
})
export const ProductPrice = styled('span', {
  color: '$gray100',
  fontWeight: '700',
})
export const ButtonRemove = styled('button', {
  color: '$green500',
  fontSize: '$base',
  fontWeight: '700',

  backgroundColor: 'transparent',
  border: 'none',
  cursor: 'pointer',
  transitionDuration: '200ms',

  '&:hover': {
    color: '$green300',
  },
})
export const SummaryContainer = styled('div', {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '3rem',
})
export const SummaryDetailsContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  color: '$gray100',
  fontSize: '$base',

  '#totalItems': {
    color: '$gray300',
  },
  '#totalCostLabel': {
    fontSize: '$md',
    fontWeight: '700',
  },
  '#totalCost': {
    fontSize: '$xl',
    fontWeight: '700',
  },
})
export const TotalCostContainer = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
})
export const ButtonCheckout = styled('button', {
  backgroundColor: '$green500',
  border: 0,
  color: '$white',
  borderRadius: 8,
  padding: '1.25rem',
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: '$md',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    backgroundColor: '$green300',
  },
})
