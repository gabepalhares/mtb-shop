import { ImageContainer, ProductContainer, ProductDetails } from '@/styles/pages/product'
import { useRouter } from 'next/router'

export default function Product() {
  const {query} = useRouter()
  
  return (
    <ProductContainer>
      <ImageContainer>
        
      </ImageContainer>
      <ProductDetails>
        <h1>Bike</h1>
        <span>preco 00,00</span>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam tempore aspernatur pariatur suscipit. Repudiandae molestias culpa excepturi nostrum quaerat dolorem sit quo modi itaque rem, delectus eum commodi id eos!</p>

        <button>comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}