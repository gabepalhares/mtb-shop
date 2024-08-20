import { styled } from "../../styles";

export const HeaderContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  maxWidth: 1080,
  padding: '2rem 0',
  margin: '0 auto',

  '@sm': {
    padding: '1.5rem 1rem',
  },

  '@container': {
    padding: '2rem 1rem',
  },
})

export const MTBShop = styled('header', {
  fontFamily: 'Squada One',
  fontWeight: 'bold',
  fontSize: '4rem',
  color: '$offwhite',

  '@md': {
      fontSize: '2.5rem',
      alignItems: 'center',
    },
})