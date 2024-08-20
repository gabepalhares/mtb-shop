import { GetServerSideProps } from "next"
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Stripe from "stripe";
import { stripe } from "@/lib/stripe";
import { ImageContainer, ImageSection, SuccessContainer } from "@/styles/pages/success";

interface SuccessProps {
  customerName: string;
  product: {
    name: string;
    imageUrl: string;
  }
  productsImages: string[]
}

export default function Success({ customerName, productsImages }: SuccessProps) {
  return (
    <>
    <Head>
      <title>Order Completed | MTB Shop</title>

      <meta name="robots" content="noindex" />
    </Head>
    
    <SuccessContainer>
      <h1>Order completed!</h1>

      <ImageSection>
          {productsImages.map((image, index) => {
            return (
              <ImageContainer key={index} >
                <Image src={image} width={140} height={140} alt='' />
              </ImageContainer>
            )
          })}
        </ImageSection>

      <p>
        Congrats <strong>{customerName}</strong>! Your brand new bike{productsImages.length > 1 && 's'} is already descending to your home.
      </p>

      <Link href="/">
        Back to catalog
      </Link>
    </SuccessContainer>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  const customerName = session.customer_details?.name;
  const productsImages = session.line_items?.data.map((item) => {
    const product = item.price?.product as Stripe.Product;
    return product.images[0];
  });


  return {
    props: {
      customerName,
      productsImages
    }
  }
}