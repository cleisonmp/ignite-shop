import { styled } from '../../../styles'

export const Container = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  maxWidth: 1240,
  marginTop: 0,
  marginLeft: 'auto',
  marginRight: 'auto',
})
export const IconsContainer = styled('div', {
  display: 'flex',
  gap: '1rem',
})
export const MenuButton = styled('button', {
  backgroundColor: 'transparent',
  color: '$white',
  border: 'none',
  cursor: 'pointer',
  opacity: 0.85,
  transitionDuration: '200ms',

  '&:hover': {
    transform: 'scale(1.1)',
    opacity: 1,
  },
})
