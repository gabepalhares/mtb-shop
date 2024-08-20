import { styled } from "@stitches/react"

export const SuccessContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 auto',
  height: 656,

 '@container': {
    padding: '0 1rem'
  },

  '@notebook': {
    minHeight: 'calc(100vh - 120px)',
  },
  
  h1: {
    fontSize: '$2xl',
    color: '$gray100',
    marginBottom: '1.5rem',
  },

  p: {
    fontSize: '$xl',
    color: '$gray300',
    maxWidth: 560,
    textAlign: 'center',
    marginBottom: '5rem',
    lineHeight: 1.6,
    marginRight: '0.50rem',
    marginLeft: '0.50rem',
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

export const ImageSection = styled('div', {
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  marginBottom: '1.5rem',
})

export const ImageContainer = styled('div', {
  position: 'relative',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0.25rem',
  margin: '0 -26px',

  width: 200,
  height: 200,
  background: '$offwhite',
  borderRadius: '50%',
  boxShadow: '0px 0px 60px rgba(0, 0, 0, 0.8)',
})