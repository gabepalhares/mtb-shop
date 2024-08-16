import { styled } from "@stitches/react";


export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: '4rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginBottom: '5rem',
    lineHeight: 1.4,
  },

  a: {
    display: 'block',
    fontSize: '$lg',
    color: '$red500',
    textDecoration: 'none',
    fontWeight: 'bold',

    '&:hover': {
      color: '$red300',
    }
  },
})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 130,
  height: 145,
  background: '$offwhite',
  borderRadius: 8,
  padding: '0.25rem',
  marginBottom: '2rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
  img: {
    objectFit: 'cover',
  }
})