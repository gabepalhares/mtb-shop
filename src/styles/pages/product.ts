import { styled } from "@stitches/react";

export const ProductContainer = styled('main', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  alignItems: 'stretch',
  gap: '4rem',

  maxWidth: 1180,
  margin: '0 auto',

  '@xl': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 540,
  height: 570,
  background: '$offwhite',
  borderRadius: 8,
  padding: '0.25rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '@md': {
    height: 400
  },

  img: {
    objectFit: 'cover',
  }
})

export const ProductDetails = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  h1: {
    fontSize: '$xl',
    color: '$gray300',
  },

  span: {
    marginTop: '1rem',
    display: 'block',
    fontSize: '$xl',
    color: '$red300',
    marginBottom: '2.5rem',
  },

  p: {
    fontSize: '$md',
    lineHeight: 1.6,
    color: '$gray300',
    marginBottom: 'auto',

    '@md': {
      marginBottom: '1.5rem'
    },
  },

  button: {
    backgroundColor: '$red500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background-color 0.2s ease-in-out',

  '&:disabled': {
    opacity: 0.6,
    cursor: 'not-allowed',
  },

    '&:not(:disabled):hover': {
      backgroundColor: '$red300',
    }
  }
})